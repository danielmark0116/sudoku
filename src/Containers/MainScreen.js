import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import isLoadPossible from '../helpers/isLoad';
import DifficultyBox from './DifficultyBox';
import Header from '../Components/Header';
import CustomButton from '../Components/Btn';
import GameText from '../Components/GameText';
import Centered from '../Components/Centered';

import style from '../styles/main.scss';

import { revealAnimation } from '../animation/reveal';

class MainScreen extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func,
    difficulty: PropTypes.string,
    load: PropTypes.func,
    generate: PropTypes.func
  };

  constructor() {
    super();
    this.startBtnNode = React.createRef();
    this.loadBtnNode = React.createRef();
  }

  componentDidMount() {
    const startBtnNode = this.startBtnNode.current;
    const loadBtnNode = this.loadBtnNode.current;

    revealAnimation(startBtnNode, 1);
    revealAnimation(loadBtnNode, 1.3);
  }

  render() {
    const { generate, load, setDifficulty, difficulty } = this.props;

    return (
      <Fragment>
        <Header isLarge={true} showDifficulty={false} />
        <div className={style.container}>
          <DifficultyBox
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
          <div ref={this.startBtnNode}>
            <Centered>
              <CustomButton
                action={difficulty !== null ? generate : null}
                large={true}
                disabled={difficulty ? false : true}
                margin={true}
              >
                start game
              </CustomButton>
            </Centered>
          </div>

          {isLoadPossible() ? (
            <div ref={this.loadBtnNode}>
              <GameText margin={true}>
                It seems like you have a game going...
              </GameText>
              <Centered>
                <CustomButton action={load} success={true}>
                  continue
                </CustomButton>
              </Centered>
            </div>
          ) : (
            <div ref={this.loadBtnNode}>
              <GameText margin={true}>
                You don't have any games going at the moment.
              </GameText>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default MainScreen;
