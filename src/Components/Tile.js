import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Value from './Value';

class Tile extends Component {
  static propTypes = {
    tile: PropTypes.object,
    index: PropTypes.number,
    sudokuData: PropTypes.object,
    sudoku: PropTypes.string,
    onChange: PropTypes.func
  };

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
