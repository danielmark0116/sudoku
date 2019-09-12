import React, { Component, Fragment } from 'react';

import Block from '../Components/Block';
import Menu from './Menu';

// STYLES
import style from '../styles/main.scss';

class Board extends Component {
  render() {
    const {
      sudoku,
      sudokuData,
      onChange,
      solve,
      generate,
      check,
      showEmptyIndexes,
      printState,
      save,
      load
    } = this.props;

    return (
      <Fragment>
        <h2>BOARD</h2>
        <div className={style.sudoku}>
          {sudokuData.generatedBlocks.map((block, index) => (
            <Block
              block={block}
              index={index}
              onChange={onChange}
              key={index}
              sudokuData={sudokuData}
              sudoku={sudoku}
            />
          ))}
        </div>
        <Menu solve={solve} generate={generate} check={check} showEmptyIndexes={showEmptyIndexes} printState={printState} save={save} load={load} />
      </Fragment>
    );
  }
}

export default Board;
