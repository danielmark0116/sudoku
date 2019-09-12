import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class DifficultyBtn extends Component {
  static propTypes = {
    children: PropTypes.string,
    setDifficulty: PropTypes.func
  };

  render() {
    const { children, setDifficulty } = this.props;

    return (
      <Fragment>
        <button
          onClick={() => {
            setDifficulty(children);
          }}
        >
          {children}
        </button>
        <br />
      </Fragment>
    );
  }
}

export default DifficultyBtn;
