import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Block from '../Components/Block';
import Menu from './Menu';
import Header from '../Components/Header';

// STYLES
import style from '../styles/main.scss';

class Board extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    sudoku: PropTypes.string,
    sudokuData: PropTypes.object,
    solve: PropTypes.func,
    generate: PropTypes.func,
    check: PropTypes.func,
    showEmptyIndexes: PropTypes.func,
    printState: PropTypes.func,
    save: PropTypes.func,
    load: PropTypes.func,
    difficulty: PropTypes.string
  };

  constructor() {
    super();
    this.state = {
      shouldBlockPopups: false
    };
  }

  blockPopup = bool => {
    this.setState({
      shouldBlockPopups: bool
    });
  };

  render() {
    const {
      sudoku,
      sudokuData,
      onChange,
      solve,
      generate,
      check,
      showEmptyIndexes,
      printState,
      save,
      load,
      difficulty
    } = this.props;

    const { shouldBlockPopups } = this.state;

    return (
      <Fragment>
        <div className={style.container}>
          <Header difficulty={difficulty} />
          <div className={style.sudokuBoard} onKeyDown={this.onKeyPressed}>
            {sudokuData.generatedBlocks.map((block, index) => (
              <Block
                block={block}
                index={index}
                onChange={onChange}
                key={index}
                sudokuData={sudokuData}
                sudoku={sudoku}
                blockPopup={this.blockPopup}
                shouldBlockPopups={shouldBlockPopups}
              />
            ))}
          </div>
          <Menu
            solve={solve}
            generate={generate}
            check={check}
            showEmptyIndexes={showEmptyIndexes}
            printState={printState}
            save={save}
            load={load}
          />
        </div>
      </Fragment>
    );
  }
}

export default Board;
