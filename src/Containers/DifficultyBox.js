import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DifficultyBtn from '../Components/DifficultyBtn';

class DifficultyBox extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func
  };

  render() {
    const { setDifficulty } = this.props;

    return (
      <Fragment>
        <h3>difficulty box</h3>
        <DifficultyBtn setDifficulty={setDifficulty}>easy</DifficultyBtn>
        <DifficultyBtn setDifficulty={setDifficulty}>medium</DifficultyBtn>
        <DifficultyBtn setDifficulty={setDifficulty}>hard</DifficultyBtn>
        <DifficultyBtn setDifficulty={setDifficulty}>very hard</DifficultyBtn>
        <DifficultyBtn setDifficulty={setDifficulty}>insane</DifficultyBtn>
        <DifficultyBtn setDifficulty={setDifficulty}>inhuman</DifficultyBtn>
      </Fragment>
    );
  }
}

export default DifficultyBox;
