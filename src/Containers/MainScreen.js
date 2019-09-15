import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import isLoadPossible from '../helpers/isLoad';
import DifficultyBox from './DifficultyBox';
import Header from '../Components/Header';

import style from '../styles/main.scss';

class MainScreen extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func,
    difficulty: PropTypes.string,
    load: PropTypes.func,
    generate: PropTypes.func
  };

  render() {
    const { generate, load, setDifficulty, difficulty } = this.props;

    return (
      <Fragment>
        <Header showDifficulty={false} />
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
          <div
            style={{ marginTop: '40px' }}
            className={`${style.d_flex} ${style.justify_content_center}`}
          >
            {isLoadPossible() && (
              <button
                className={`${style.custom_btn} ${style.success}`}
                onClick={load}
              >
                load the game
              </button>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MainScreen;
