import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

// SUDOKU
import sudoku from 'sudoku-umd';
import Sudoku from '../services/Sudoku';

// CONTAINERS
import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sudoku: null,
      sudokuData: null,
      showSolved: false,
      sudokuPrev: null
    };
  }

  generate = () => {
    const sud = sudoku.generate('easy');
    this.setState({
      sudoku: sud,
      sudokuData: new Sudoku(sud)
    });
  };

  solve = () => {
    this.setState(
      {
        showSolved: !this.state.showSolved
      },
      () => {
        if (this.state.showSolved) {
          this.setState({
            sudokuPrev: this.state.sudoku,
            sudoku: this.state.sudokuData.solvedSudoku
          });
        } else {
          this.setState({
            sudoku: this.state.sudokuPrev
          });
        }
      }
    );
  };

  check = () => {
    const { sudoku } = this.state;
    const solved = this.state.sudokuData.solvedSudoku;

    if (sudoku === solved && !this.state.showSolved) {
      console.log('solved');
    } else {
      console.log('not solved');
    }
  };

  handleChange = (e, index) => {
    if (!this.state.showSolved && e.target.value === '') {
      const oldSud = this.state.sudoku.split('');
      oldSud[index] = '.';
      this.setState({
        sudoku: oldSud.join('')
      });
    }
    let input = parseInt(e.target.value);
    if (
      !this.state.showSolved &&
      typeof input === 'number' &&
      input > 0 &&
      input < 10
    ) {
      input = input.toString();
      const oldSud = this.state.sudoku.split('');
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
    const { sudokuData, sudoku, showSolved } = this.state;

    !showSolved && sudokuData.save(sudoku);
  };

  load = () => {
    const { playerSudokuState, initialSudoku } = this.state.sudokuData.load();

    this.setState({
      sudoku: playerSudokuState,
      sudokuData: new Sudoku(initialSudoku)
    });
  };

  showEmptyIndexes = () => {
    console.log(this.state.sudokuData.emptyIndexes);
  };

  printState = () => {
    console.log(this.state.sudoku);
    console.log(this.state.sudokuData.generatedBlocks);
  };

  render() {
    const { sudoku, sudokuData } = this.state;

    if (this.state.sudoku === null)
      return <button onClick={this.generate}>sdfh</button>;

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
          />
        )}
      </Fragment>
    );
  }
}

export default hot(module)(App);
