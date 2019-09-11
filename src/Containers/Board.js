import React, { Component, Fragment } from 'react';

// STYLES
import style from '../styles/main.scss';

class Board extends Component {
  render() {
    const { sudoku, sudokuData } = this.props;

    return (
      <Fragment>
        <h2>BOARD</h2>
        <div className={style.sudoku}>
          {sudoku !== null &&
            sudokuData.generatedBlocks.map((block, i) => (
              <div className={style.block} key={i}>
                {block.map((y, i) =>
                  sudokuData.emptyIndexes.includes(y.i) ? (
                    <input
                      key={i}
                      nthplace={y.i}
                      className={style.tile}
                      value={
                        sudoku.split('')[y.i] === '.'
                          ? ''
                          : sudoku.split('')[y.i]
                      }
                      autoComplete="off"
                      onChange={e => {
                        this.props.onChange(e, y.i);
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
        <button onClick={this.props.solve}>solve</button>
        <button onClick={this.props.generate}>generate</button>
        <button onClick={this.props.check}>check</button>
        <button onClick={this.props.showEmptyIndexes}>
          show empty indexes
        </button>
        <button onClick={this.props.printState}>print state</button>
        <button onClick={this.props.save}>save</button>
        <button onClick={this.props.load}>load</button>
      </Fragment>
    );
  }
}

export default Board;
