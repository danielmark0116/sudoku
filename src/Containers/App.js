import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

// SUDOKU LIB
import sudoku from 'sudoku-umd';

// SUDOKU CLASS
import Sudoku from '../services/Sudoku';

// STYLES
import style from '../styles/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sudoku: null,
      sudokuObject: null,
      showSolved: false,
      sudokuPrev: null
    };
  }

  generate = () => {
    const sud = sudoku.generate('easy');
    this.setState({
      sudoku: sud,
      sudokuObject: new Sudoku(sud)
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
            sudoku: this.state.sudokuObject.solvedSudoku
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
    const solved = this.state.sudokuObject.solvedSudoku;

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

  showEmptyIndexes = () => {
    console.log(this.state.sudokuObject.emptyIndexes);
  };

  printState = () => {
    console.log(this.state.sudoku);
  };

  save = () => {
    this.state.sudokuObject.save(this.state.sudoku);
  };

  load = () => {
    const { playerSudokuState, initialSudoku } = this.state.sudokuObject.load();
    this.setState({
      sudoku: playerSudokuState,
      sudokuObject: new Sudoku(initialSudoku)
    });
  };

  render() {
    if (this.state.sudoku === null)
      return <button onClick={this.generate}>sdfh</button>;
    return (
      <Fragment>
        <h2>sudoku</h2>
        <div className={style.sudoku}>
          {this.state.sudoku !== null &&
            this.state.sudokuObject.generatedBlocks.map((x, i) => (
              <div className={style.block} key={i}>
                {x.map((y, i) =>
                  this.state.sudokuObject.emptyIndexes.includes(y.i) ? (
                    <input
                      key={i}
                      nthplace={y.i}
                      className={style.tile}
                      value={
                        this.state.sudoku.split('')[y.i] === '.'
                          ? ''
                          : this.state.sudoku.split('')[y.i]
                      }
                      autoComplete="off"
                      onChange={e => {
                        this.handleChange(e, y.i);
                      }}
                    />
                  ) : (
                    <p key={i} className={style.tile} nthplace={y.i}>
                      {y.value}
                    </p>
                  )
                )}
              </div>
            ))}
        </div>
        <button onClick={this.solve}>solve</button>
        <button onClick={this.generate}>generate</button>
        <button onClick={this.check}>check</button>
        <button onClick={this.showEmptyIndexes}>show empty indexes</button>
        <button onClick={this.printState}>print state</button>
        <button onClick={this.save}>save</button>
        <button onClick={this.load}>load</button>
      </Fragment>
    );
  }
}

export default hot(module)(App);
