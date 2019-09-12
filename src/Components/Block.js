import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';
import Tile from './Tile';

class Block extends Component {
  static propTypes = {
    block: PropTypes.array,
    index: PropTypes.number,
    onChange: PropTypes.func,
    sudokuData: PropTypes.object,
    sudoku: PropTypes.string
  };

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
