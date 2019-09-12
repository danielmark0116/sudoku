import React, { Component, Fragment } from 'react';

import Input from './Input';
import Value from './Value';

class Tile extends Component {
  render() {
    const { tile, index, sudokuData, sudoku, onChange } = this.props;

    return (
      <Fragment>
        {sudokuData.emptyIndexes.includes(tile.i) ? (
          <Input
            key={index}
            index={index}
            tile={tile}
            sudoku={sudoku}
            onChange={onChange}
          />
        ) : (
          <Value key={index} index={index} tile={tile} />
        )}
      </Fragment>
    );
  }
}

export default Tile;
