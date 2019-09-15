import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// import Logo from '../../assets/LOGO.png';

import { revealFadeIn } from '../animation/reveal';

const style = {
  margin: '40px auto 0',
  display: 'block'
};

const styleLarge = {
  margin: '40px auto 0',
  display: 'block',
  width: '500px'
};

const p = {
  textAlign: 'center',
  fontSize: '12px',
  color: 'white',
  marginBottom: '40px'
};

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
        <div ref={this.node}>
          <img
            src="../../assets/LOGO.svg"
            alt=""
            style={isLarge ? styleLarge : style}
          />
          {showDifficulty && (
            <p style={p}>Difficulty level: {difficulty.toUpperCase()} </p>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Header;
