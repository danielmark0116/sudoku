import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import isLoadPossible from '../helpers/isLoad';
import DifficultyBox from './DifficultyBox';

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
        <DifficultyBox setDifficulty={setDifficulty}></DifficultyBox>
        <button
          onClick={() => {
            difficulty === null ? console.log('choose diff') : generate();
          }}
        >
          GENERATE NEW SUDOKU
        </button>
        {isLoadPossible() && <button onClick={load}>LOAD</button>}
      </Fragment>
    );
  }
}

export default MainScreen;
