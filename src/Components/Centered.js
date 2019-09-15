import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

class Centered extends Component {
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
        <div
          style={margin ? { marginTop: '40px' } : null}
          className={`${style.d_flex} ${style.justify_content_center}`}
        >
          {children}
        </div>
      </Fragment>
    );
  }
}

export default Centered;
