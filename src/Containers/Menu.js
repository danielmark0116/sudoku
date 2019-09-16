import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import { btnPush, resetBtn, btnUp } from '../animation/btn';

class Menu extends Component {
  static propTypes = {
    solve: PropTypes.func,
    save: PropTypes.func,
    checkIfBoardSolved: PropTypes.func,
    resetGame: PropTypes.func
  };

  animateOnPush = node => {
    btnPush(node);
  };

  cancelBtnClick = node => {
    resetBtn(node);
  };

  animateOnUp = node => {
    btnUp(node);
  };

  render() {
    const { solve, resetGame, save, checkIfBoardSolved } = this.props;

    return (
      <div className={`${style.d_flex} ${style.justify_content_center}`}>
        <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={solve}
          onMouseDown={e => {
            this.animateOnPush(e.target);
          }}
          onMouseUp={e => {
            this.animateOnUp(e.target);
          }}
          onMouseLeave={e => {
            this.cancelBtnClick(e.target);
          }}
        >
          solve
        </button>
        <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={resetGame}
          onMouseDown={e => {
            this.animateOnPush(e.target);
          }}
          onMouseUp={e => {
            this.animateOnUp(e.target);
          }}
          onMouseLeave={e => {
            this.cancelBtnClick(e.target);
          }}
        >
          reset game
        </button>
        <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={checkIfBoardSolved}
          onMouseDown={e => {
            this.animateOnPush(e.target);
          }}
          onMouseUp={e => {
            this.animateOnUp(e.target);
          }}
          onMouseLeave={e => {
            this.cancelBtnClick(e.target);
          }}
        >
          check
        </button>
        <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={save}
          onMouseDown={e => {
            this.animateOnPush(e.target);
          }}
          onMouseUp={e => {
            this.animateOnUp(e.target);
          }}
          onMouseLeave={e => {
            this.cancelBtnClick(e.target);
          }}
        >
          save
        </button>
      </div>
    );
  }
}

export default Menu;
