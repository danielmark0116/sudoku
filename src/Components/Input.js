import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import Popup from './Popup';

class Input extends Component {
  static propTypes = {
    index: PropTypes.number,
    tile: PropTypes.object,
    sudoku: PropTypes.string,
    onChange: PropTypes.func,
    shouldBlockPopups: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  triggerPopup = e => {
    const { showPopup } = this.state;

    this.setState({
      showPopup: !showPopup
    });
  };

  updateTile = value => {
    this.triggerPopup();
    this.props.blockPopup(false);
    this.props.onChange(value, this.props.tile.i);
  };

  render() {
    const { index, tile, sudoku, blockPopup, shouldBlockPopups } = this.props;
    const { showPopup } = this.state;
    const possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <div
        key={index}
        className={`${style.tile} ${style.tile_box} ${style.tile_box_input} ${
          showPopup ? style.active : ''
        }`}
        nthplace={tile.i}
        onKeyDown={e => {
          if (showPopup) {
            if (possibleValues.includes(parseInt(e.key))) {
              this.updateTile(e.key);
            }
            if (e.key === 'Escape' || e.key === 'Enter') {
              this.updateTile('.');
            }
          }
        }}
        tabIndex="-1"
        onClick={() => {
          if (!shouldBlockPopups || showPopup) {
            this.triggerPopup();
            if (showPopup) {
              blockPopup(false);
            } else {
              blockPopup(true);
            }
          }
        }}
      >
        {sudoku.split('')[tile.i] === '.' ? '' : sudoku.split('')[tile.i]}
        {showPopup && <Popup updateTile={this.updateTile} />}
      </div>
    );
  }
}

export default Input;
