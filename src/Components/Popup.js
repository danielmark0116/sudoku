import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import { animatePopup } from '../animation/popup';

class Popup extends Component {
  static propTypes = {
    updateTile: PropTypes.func.isRequired
  };

  constructor() {
    super();
    this.state = {
      btnValues: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const node = this.nodeRef.current;

    animatePopup(node);
  }

  render() {
    const { updateTile } = this.props;
    const { btnValues } = this.state;

    return (
      <Fragment>
        <div
          style={{ zIndex: 100 }}
          className={`${style.popup} popup`}
          ref={this.nodeRef}
        >
          {btnValues.map(value => (
            <button
              key={value}
              onClick={() => {
                updateTile(value);
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
