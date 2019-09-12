import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Block from '../Components/Block';
import Menu from './Menu';

// STYLES
import style from '../styles/main.scss';

class Board extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    sudoku: PropTypes.string,
    sudokuData: PropTypes.object,
    solve: PropTypes.func,
    generate: PropTypes.func,
    check: PropTypes.func,
    showEmptyIndexes: PropTypes.func,
    printState: PropTypes.func,
    save: PropTypes.func,
    load: PropTypes.func,
    difficulty: PropTypes.string
  };

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
      load,
      difficulty
    } = this.props;

    return (
      <Fragment>
        <h2>BOARD {difficulty} </h2>
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
        <Menu
          solve={solve}
          generate={generate}
          check={check}
          showEmptyIndexes={showEmptyIndexes}
          printState={printState}
          save={save}
          load={load}
        />
      </Fragment>
    );
  }
}

export default Board;
