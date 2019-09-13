import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import style from '../styles/main.scss';
import Tile from './Tile';

// Animations
import { animateBlock, bringToBack } from '../animation/block';

class Block extends Component {
  static propTypes = {
    block: PropTypes.array,
    index: PropTypes.number,
    onChange: PropTypes.func,
    sudokuData: PropTypes.object,
    sudoku: PropTypes.string
  };

  constructor() {
    super();
    this.nodeRef = React.createRef();
  }

  animateOnHover = bool => {
    const node = this.nodeRef.current;
    animateBlock(node, bool);
  };

  tilesToBack = () => {
    const tiles = document.querySelectorAll('.bringToBack');
    bringToBack(tiles);
  };

  render() {
    const {
      block,
      index,
      onChange,
      sudokuData,
      sudoku,
      blockPopup,
      shouldBlockPopups
    } = this.props;

    return (
      <Fragment>
        <div
          className={`${style.block} bringToBack`}
          key={index}
          style={{ zIndex: 1 }}
          ref={this.nodeRef}
          onMouseLeave={() => {
            this.animateOnHover(false);
          }}
          onMouseEnter={() => {
            this.tilesToBack();
            this.animateOnHover(true);
          }}
        >
          {block.map((tile, i) => (
            <Tile
              tile={tile}
              index={i}
              sudokuData={sudokuData}
              sudoku={sudoku}
              onChange={onChange}
              key={i}
              blockPopup={blockPopup}
              shouldBlockPopups={shouldBlockPopups}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Block;
