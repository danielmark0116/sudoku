import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';

import Block from '../Components/Block';
import Menu from './Menu';
import Header from '../Components/Header';
import Timer from '../Components/Timer';

import { animateBoard, boardReveal, boardNotSolved } from '../animation/board';

class Board extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    sudoku: PropTypes.string,
    sudokuData: PropTypes.object,
    solve: PropTypes.func,
    check: PropTypes.func,
    resetGame: PropTypes.func,
    save: PropTypes.func,
    load: PropTypes.func,
    difficulty: PropTypes.string,
    isSolved: PropTypes.bool
  };

  constructor() {
    super();
    this.state = {
      shouldBlockPopups: false
    };
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const node = this.nodeRef.current;
    boardReveal(node);
  }

  blockPopup = bool => {
    this.setState({
      shouldBlockPopups: bool
    });
  };

  checkIfBoardSolved = () => {
    const node = this.nodeRef.current;
    const { isSolved } = this.props;

    isSolved ? console.log('success') : boardNotSolved(node);
  };

  handleMouseMove = e => {
    const node = this.nodeRef.current;

    animateBoard(node, e);
  };

  render() {
    const {
      sudoku,
      sudokuData,
      onChange,
      solve,
      save,
      load,
      difficulty,
      resetGame,
      sudokuPlayedTime
    } = this.props;

    const { shouldBlockPopups } = this.state;

    return (
      <Fragment>
        <div className={style.container}>
          <Header difficulty={difficulty} />
          <Timer sudokuData={sudokuData} sudokuPlayedTime={sudokuPlayedTime} />
          <div
            ref={this.nodeRef}
            onMouseMove={e => {
              this.handleMouseMove(e);
            }}
            className={style.sudokuBoard}
            onKeyDown={this.onKeyPressed}
          >
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
            save={save}
            load={load}
            resetGame={resetGame}
            checkIfBoardSolved={this.checkIfBoardSolved}
          />
        </div>
      </Fragment>
    );
  }
}

export default Board;
