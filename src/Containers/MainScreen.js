import React, { Component, Fragment } from 'react';

import isLoadPossible from '../helpers/isLoad';

class MainScreen extends Component {
  render() {
    const { generate, load } = this.props;

    return (
      <Fragment>
        <button onClick={generate}>GENERATE NEW SUDOKU</button>
        {isLoadPossible() && <button onClick={load}>LOAD</button>}
      </Fragment>
    );
  }
}

export default MainScreen;
