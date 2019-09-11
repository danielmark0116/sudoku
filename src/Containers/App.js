import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';

// STYLES
import style from '../styles/main.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      state: 'test'
    };
  }

  render() {
    return (
      <Fragment>
        <h2 className={style.main}>sudoku</h2>
        <p>test</p>
      </Fragment>
    );
  }
}

export default hot(module)(App);
