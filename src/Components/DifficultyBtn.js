import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import { btnScale, resetBtn, btnReveal } from '../animation/btn';

class DifficultyBtn extends Component {
  static propTypes = {
    children: PropTypes.string,
    setDifficulty: PropTypes.func,
    difficulty: PropTypes.string,
    index: PropTypes.number
  };

  constructor() {
    super();
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const { index } = this.props;
    const node = this.nodeRef.current;

    btnReveal(node, index);
  }

  componentDidUpdate() {
    const { difficulty, children } = this.props;
    const node = this.nodeRef.current;

    if (difficulty === children) {
      btnScale(node);
    } else {
      resetBtn(node);
    }
  }

  render() {
    const { children, setDifficulty, difficulty } = this.props;

    return (
      <Fragment>
        <div className={`${style.d_flex} ${style.justify_content_center}`}>
          <button
            ref={this.nodeRef}
            className={`${style.custom_btn} ${style.small} ${style.off} ${
              difficulty === children ? style.selected : null
            }`}
            onClick={() => {
              setDifficulty(children);
            }}
          >
            {children}
          </button>
        </div>
      </Fragment>
    );
  }
}

export default DifficultyBtn;
