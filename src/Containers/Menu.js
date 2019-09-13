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
      generate,
      check,
      showEmptyIndexes,
      printState,
      save,
      load
    } = this.props;

    return (
      <Fragment>
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
          onClick={generate}
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
          generate
        </button>
        <button
          className={`${style.small} ${style.custom_btn}`}
          onClick={check}
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
        </button>
        <button
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
        <button
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
        </button>
      </Fragment>
    );
  }
}

export default Menu;
