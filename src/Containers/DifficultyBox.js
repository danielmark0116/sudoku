import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import DifficultyBtn from '../Components/DifficultyBtn';

import { revealFadeIn } from '../animation/reveal';

import style from '../styles/main.scss';

class DifficultyBox extends Component {
  static propTypes = {
    setDifficulty: PropTypes.func,
    difficulty: PropTypes.string
  };

  constructor() {
    super();
    this.node = React.createRef();
  }

  componentDidMount() {
    const node = this.node.current;
    revealFadeIn(node, 0.4);
  }

  render() {
    const { setDifficulty, difficulty } = this.props;
    const difficultyLevels = [
      'easy',
      'medium',
      'hard',
      'very hard',
      'insane',
      'inhuman'
    ];

    return (
      <Fragment>
        <div className={style.difficulty_box}>
          <p ref={this.node} className={style.difficulty_box_text}>
            Choose difficulty level
          </p>
          {difficultyLevels.map((lvl, i) => (
            <DifficultyBtn
              key={i}
              index={i}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            >
              {lvl}
            </DifficultyBtn>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default DifficultyBox;
