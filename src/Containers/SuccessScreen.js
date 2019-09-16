import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Components/Header';
import CustomButton from '../Components/Btn';
import Centered from '../Components/Centered';
import GameText from '../Components/GameText';

import { timeToLongString } from '../helpers/timeFormat';
import { deleteSavedGame } from '../helpers/deleteSavedGame';

import { revealFadeIn } from '../animation/reveal';
import { btnReveal } from '../animation/btn';

class SuccessScreen extends Component {
  static propTypes = {
    difficulty: PropTypes.string,
    resetGame: PropTypes.func,
    sudokuData: PropTypes.object
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

    deleteSavedGame();
  }

  render() {
    const { difficulty, resetGame, sudokuData } = this.props;
    const { timeMinutes, timeSeconds } = sudokuData;

    return (
      <Fragment>
        <Header difficulty={difficulty}></Header>
        <div ref={this.textNode}>
          <GameText>
            Congratulations! You have solved the sudoku on {difficulty}{' '}
            difficulty level in <br /> <br />
            <span>{timeToLongString(timeMinutes, timeSeconds)}!</span>
          </GameText>
        </div>

        <div ref={this.btnNode}>
          <Centered>
            <CustomButton action={resetGame} success={true}>
              play again
            </CustomButton>
          </Centered>
        </div>
      </Fragment>
    );
  }
}

export default SuccessScreen;
