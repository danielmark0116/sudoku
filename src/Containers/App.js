import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

import sudoku from 'sudoku-umd';
import Sudoku from '../services/Sudoku';
import isLoadPossible from '../helpers/isLoad';
import loadGame from '../helpers/loadGame';

import Board from './Board';
import MainScreen from './MainScreen';
import SuccessScreen from './SuccessScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sudoku: null,
      sudokuData: null,
      showSolved: false,
      sudokuPrev: null,
      difficulty: null,
      isSolved: false,
      sudokuPlayedTime: ''
    };
  }

  generate = () => {
    const { difficulty } = this.state;

    const sud = sudoku.generate(difficulty);

    this.setState({
      sudoku: sud,
      sudokuData: new Sudoku(sud),
      isSolved: false,
      sudokuPlayedTime: ''
    });
  };

  resetGame = () => {
    this.setState({
      sudoku: null,
      difficulty: null,
      isSolved: false,
      sudokuPlayedTime: ''
    });
  };

  setDifficulty = difficultyAsString => {
    this.setState({
      difficulty: difficultyAsString
    });
  };

  solve = () => {
    const { showSolved, sudoku, sudokuData, sudokuPrev } = this.state;

    this.setState(
      {
        showSolved: !showSolved
      },
      () => {
        if (this.state.showSolved) {
          this.setState({
            sudokuPrev: sudoku,
            sudoku: sudokuData.solvedSudoku
          });
        } else {
          this.setState({
            sudoku: sudokuPrev
          });
        }
      }
    );
  };

  check = () => {
    const { sudoku, showSolved } = this.state;
    const solved = this.state.sudokuData.solvedSudoku;

    if (sudoku === solved && !showSolved) {
      console.log('solved');
      this.setState({
        isSolved: true
      });
    } else {
      this.setState({
        isSolved: false
      });
      console.log('not solved');
    }
  };

  handleChange = (value, index) => {
    const { showSolved, sudoku } = this.state;

    if (!showSolved && value === '') {
      const oldSud = this.state.sudoku.split('');
      oldSud[index] = '.';

      this.setState({
        sudoku: oldSud.join('')
      });
    }
    let input = parseInt(value);
    if (!showSolved && typeof input === 'number' && input > 0 && input < 10) {
      input = input.toString();
      const oldSud = sudoku.split('');
      oldSud[index] = input;

      this.setState(
        {
          sudoku: oldSud.join('')
        },
        () => {
          this.check();
        }
      );
    }
  };

  save = () => {
    const { sudokuData, sudoku, showSolved, difficulty } = this.state;

    !showSolved && difficulty !== null && sudokuData.save(sudoku, difficulty);
  };

  load = () => {
    const { showSolved } = this.state;

    if (isLoadPossible()) {
      const {
        playerSudokuState,
        initialSudoku,
        sudokuDifficulty,
        sudokuPlayedTime
      } = loadGame();

      if (!showSolved) {
        this.setState({
          sudoku: playerSudokuState,
          sudokuData: new Sudoku(initialSudoku),
          difficulty: sudokuDifficulty,
          sudokuPlayedTime: sudokuPlayedTime
        });
      }
    }
  };

  showEmptyIndexes = () => {
    console.log(this.state.sudokuData.emptyIndexes);
  };

  printState = () => {
    console.log(this.state.sudoku);
    console.log(this.state.sudokuData.generatedBlocks);
  };

  render() {
    const {
      sudoku,
      sudokuData,
      difficulty,
      isSolved,
      sudokuPlayedTime
    } = this.state;

    if (isSolved)
      return (
        <SuccessScreen
          sudokuData={sudokuData}
          difficulty={difficulty}
          resetGame={this.resetGame}
        />
      );

    if (sudoku === null)
      return (
        <MainScreen
          setDifficulty={this.setDifficulty}
          difficulty={difficulty}
          load={this.load}
          generate={this.generate}
        />
      );

    return (
      <Fragment>
        {sudoku !== null && (
          <Board
            sudokuPlayedTime={sudokuPlayedTime}
            onChange={this.handleChange}
            sudoku={sudoku}
            sudokuData={sudokuData}
            solve={this.solve}
            resetGame={this.resetGame}
            check={this.check}
            showEmptyIndexes={this.showEmptyIndexes}
            printState={this.printState}
            save={this.save}
            load={this.load}
            difficulty={difficulty}
            isSolved={isSolved}
          />
        )}
      </Fragment>
    );
  }
}

export default hot(module)(App);
