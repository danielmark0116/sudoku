import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import Logo from '../../assets/LOGO.svg';
import SVG from 'react-inlinesvg';

import { revealFadeIn } from '../animation/reveal';

class Header extends Component {
  static propTypes = {
    difficulty: PropTypes.string,
    showDifficulty: PropTypes.bool,
    isLarge: PropTypes.bool
  };

  static defaultProps = {
    difficulty: '',
    showDifficulty: true,
    isLarge: false
  };

  constructor() {
    super();
    this.node = React.createRef();
  }

  componentDidMount() {
    const node = this.node.current;
    revealFadeIn(node, 0);
  }

  render() {
    const { difficulty, showDifficulty, isLarge } = this.props;

    return (
      <Fragment>
        <div ref={this.node} className={style.header}>
          <SVG
            className={isLarge ? style.logoLarge : style.logo}
            src={Logo}
          ></SVG>
          {showDifficulty && (
            <p>Difficulty level: {difficulty.toUpperCase()} </p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Header;
