import React, { Component, Fragment } from 'react';

import style from '../styles/main.scss';

import { btnPush, resetBtn, btnUp } from '../animation/btn';

class Menu extends Component {
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
    const {
      solve,
      resetGame,
      showEmptyIndexes,
      printState,
      save,
      load,
      checkIfBoardSolved
    } = this.props;

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
        {/* <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={showEmptyIndexes}
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
          show empty indexes
        </button> */}
        {/* <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={printState}
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
          print state
        </button> */}
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
        {/* <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={load}
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
          load
        </button> */}
      </div>
    );
  }
}

export default Menu;
