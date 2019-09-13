import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import { nonInputAnimation } from '../animation/nonInput';

class Value extends Component {
  static propTypes = {
    index: PropTypes.number,
    tile: PropTypes.object
  };

  constructor() {
    super();
    this.nodeRef = React.createRef();
  }

  animateNonInput = () => {
    const node = this.nodeRef.current;
    nonInputAnimation(node);
  };

  render() {
    const { index, tile } = this.props;

    return (
      <Fragment>
        <div
          ref={this.nodeRef}
          key={index}
          className={`${style.tile} ${style.tile_box} ${style.noselect}`}
          nthplace={tile.i}
          onClick={() => {
            this.animateNonInput();
          }}
        >
          {tile.value}
        </div>
      </Fragment>
    );
  }
}

export default Value;
