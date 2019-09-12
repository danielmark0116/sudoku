import React, { Component, Fragment } from 'react';

import style from '../styles/main.scss';

class Input extends Component {
  render() {
    const { index, tile, sudoku, onChange } = this.props;

    return (
      <Fragment>
        <input
          key={index}
          nthplace={tile.i}
          className={style.tile}
          value={
            sudoku.split('')[tile.i] === '.' ? '' : sudoku.split('')[tile.i]
          }
          autoComplete="off"
          onChange={e => {
            onChange(e, tile.i);
          }}
        />
      </Fragment>
    );
  }
}

export default Input;
