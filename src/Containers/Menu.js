import React, { Component, Fragment } from 'react';

class Menu extends Component {
  render() {
    const {
      solve,
      generate,
      check,
      showEmptyIndexes,
      printState,
      save,
      load
    } = this.props;

    return (
      <Fragment>
        <button onClick={solve}>solve</button>
        <button onClick={generate}>generate</button>
        <button onClick={check}>check</button>
        <button onClick={showEmptyIndexes}>show empty indexes</button>
        <button onClick={printState}>print state</button>
        <button onClick={save}>save</button>
        <button onClick={load}>load</button>
      </Fragment>
    );
  }
}

export default Menu;
