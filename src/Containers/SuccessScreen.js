import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import Header from '../Components/Header';

import { revealFadeIn } from '../animation/reveal';
import { btnReveal } from '../animation/btn';

class SuccessScreen extends Component {
  static propTypes = {
    difficulty: PropTypes.string,
    resetGame: PropTypes.func
  };

  constructor() {
    super();
    this.textNode = React.createRef();
    this.btnNode = React.createRef();
  }

  componentDidMount() {
    const textNode = this.textNode.current;
    const btnNode = this.btnNode.current;

    revealFadeIn(textNode, 0.2);
    btnReveal(btnNode, 5);
  }

  render() {
    const { difficulty, resetGame } = this.props;

    return (
      <Fragment>
        <Header></Header>
        <p
          ref={this.textNode}
          className={`${style.text_center} ${style.text_white}`}
        >
          Congratulations! You have solved the sudoku on {difficulty} difficulty
          level!
        </p>
        <div className={`${style.d_flex} ${style.justify_content_center}`}>
          <button
            ref={this.btnNode}
            onClick={resetGame}
            className={`${style.custom_btn} ${style.success}`}
          >
            play again
          </button>
        </div>
      </Fragment>
    );
  }
}

export default SuccessScreen;
