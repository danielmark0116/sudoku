import React, { Component, Fragment } from 'react';

import style from '../styles/main.scss';
import Tile from './Tile';

class Block extends Component {
  render() {
    const { block, index, onChange, sudokuData, sudoku } = this.props;

    return (
      <Fragment>
        <div className={style.block} key={index}>
          {block.map((tile, i) => (
            <Tile
              tile={tile}
              index={i}
              sudokuData={sudokuData}
              sudoku={sudoku}
              onChange={onChange}
              key={i}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Block;
