import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DifficultyBtn from '../Components/DifficultyBtn';

import style from '../styles/main.scss';

class DifficultyBox extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func,
    difficulty: PropTypes.string
  };

  render() {
    const { setDifficulty, difficulty } = this.props;

    console.log(difficulty);

    return (
      <Fragment>
        <div style={{ marginTop: '20px' }}>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            easy
          </DifficultyBtn>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            medium
          </DifficultyBtn>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            hard
          </DifficultyBtn>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            very hard
          </DifficultyBtn>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            insane
          </DifficultyBtn>
          <DifficultyBtn difficulty={difficulty} setDifficulty={setDifficulty}>
            inhuman
          </DifficultyBtn>
        </div>
      </Fragment>
    );
  }
}

export default DifficultyBox;
