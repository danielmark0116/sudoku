import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

class CustomButton extends Component {
  static propTypes = {
    children: PropTypes.string,
    action: PropTypes.func,
    large: PropTypes.bool,
    small: PropTypes.bool,
    disabled: PropTypes.bool,
    success: PropTypes.bool,
    margin: PropTypes.bool
  };

  static defaultProps = {
    children: 'Custom Btn',
    action: () => console.log('no action assigned'),
    large: false,
    small: false,
    disabled: false,
    success: false,
    margin: false
  };

  render() {
    const {
      children,
      action,
      large,
      disabled,
      success,
      margin,
      small
    } = this.props;

    return (
      <Fragment>
        <button
          style={margin ? { marginTop: '40px' } : null}
          className={`${style.custom_btn} ${large && style.large} ${small &&
            style.small} ${disabled && style.disabled} ${success &&
            style.success}`}
          onClick={action}
        >
          {children}
        </button>
      </Fragment>
    );
  }
}

export default CustomButton;
