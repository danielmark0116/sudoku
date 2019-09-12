import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

// SUDOKU
import sudoku from 'sudoku-umd';
import Sudoku from '../services/Sudoku';
import isLoadPossible from '../helpers/isLoad';
import loadGameData from '../helpers/loadGame';

// CONTAINERS
import Board from './Board';
import MainScreen from './MainScreen';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sudoku: null,
      sudokuData: null,
      showSolved: false,
      sudokuPrev: null,
      difficulty: null
    };
  }

  generate = () => {
    const { difficulty } = this.state;

    const sud = sudoku.generate(difficulty);

    this.setState({
      sudoku: sud,
      sudokuData: new Sudoku(sud)
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
    } else {
      console.log('not solved');
    }
  };

  handleChange = (e, index) => {
    const { showSolved, sudoku } = this.state;

    if (!showSolved && e.target.value === '') {
      const oldSud = this.state.sudoku.split('');
      oldSud[index] = '.';

      this.setState({
        sudoku: oldSud.join('')
      });
    }
    let input = parseInt(e.target.value);
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
        sudokuDifficulty
      } = loadGameData();

      if (!showSolved) {
        this.setState({
          sudoku: playerSudokuState,
          sudokuData: new Sudoku(initialSudoku),
          difficulty: sudokuDifficulty
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
    const { sudoku, sudokuData, difficulty } = this.state;

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
            onChange={this.handleChange}
            sudoku={sudoku}
            sudokuData={sudokuData}
            solve={this.solve}
            generate={this.generate}
            check={this.check}
            showEmptyIndexes={this.showEmptyIndexes}
            printState={this.printState}
            save={this.save}
            load={this.load}
            difficulty={difficulty}
          />
        )}
      </Fragment>
    );
  }
}

export default hot(module)(App);
