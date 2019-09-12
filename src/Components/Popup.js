import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

class Popup extends Component {
  static propTypes = {
    updateTile: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      btnValues: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }

  render() {
    const { updateTile } = this.props;
    const { btnValues } = this.state;

    return (
      <Fragment>
        <div className={`${style.popup}`}>
          {btnValues.map(value => (
            <button
              key={value}
              onClick={() => {
                updateTile(value);
              }}
              onKeyDown={() => {
                console.log('kjsdf');
              }}
            >
              {value}
            </button>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Popup;
