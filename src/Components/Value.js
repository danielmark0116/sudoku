import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

class Value extends Component {
  static propTypes = {
    index: PropTypes.number,
    tile: PropTypes.object
  };

  render() {
    const { index, tile } = this.props;

    return (
      <Fragment>
        <div
          key={index}
          className={`${style.tile} ${style.tile_box}`}
          nthplace={tile.i}
        >
          {tile.value}
        </div>
      </Fragment>
    );
  }
}

export default Value;
