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
        <p key={index} className={style.tile} nthplace={tile.i}>
          {tile.value}
        </p>
      </Fragment>
    );
  }
}

export default Value;
