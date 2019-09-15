import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import isLoadPossible from '../helpers/isLoad';
import DifficultyBox from './DifficultyBox';
import Header from '../Components/Header';

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
          <div
            style={{ marginTop: '40px' }}
            className={`${style.d_flex} ${style.justify_content_center}`}
          >
            <button
              ref={this.startBtnNode}
              className={`${style.custom_btn} ${style.large} ${style.small} ${
                style.off
              } ${difficulty === null ? style.disabled : null}`}
              onClick={() => {
                difficulty === null ? console.log('choose diff') : generate();
              }}
            >
              start game
            </button>
          </div>

          {isLoadPossible() ? (
            <div ref={this.loadBtnNode}>
              <p
                style={{ marginTop: '40px' }}
                className={`${style.text_center} ${style.text_white}`}
              >
                Seems like you have a game going...
              </p>
              <div
                className={`${style.d_flex} ${style.justify_content_center}`}
              >
                <button
                  className={`${style.custom_btn} ${style.success}`}
                  onClick={load}
                >
                  continue
                </button>
              </div>
            </div>
          ) : (
            <div ref={this.loadBtnNode}>
              <p
                style={{ marginTop: '40px' }}
                className={`${style.text_center} ${style.text_white}`}
              >
                You don't have any games going at the moment.
              </p>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default MainScreen;
