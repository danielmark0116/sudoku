import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

class GameText extends Component {
  static defaultProps = {
    margin: false
  };

  static propTypes = {
    margin: PropTypes.bool
  };

  render() {
    const { children, margin } = this.props;

    return (
      <Fragment>
        <p
          style={margin ? { marginTop: '40px' } : null}
          className={`${style.text_center} ${style.text_white}`}
        >
          {children}
        </p>
      </Fragment>
    );
  }
}

export default GameText;
