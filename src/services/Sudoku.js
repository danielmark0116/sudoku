import sudoku from 'sudoku-umd';

class Sudoku {
  constructor(sudokuString) {
    this.sudokuString = sudokuString;
    this.sudokuArray = sudokuString.split('');
    this.solvedSudoku = sudoku.solve(sudokuString);
    this.generatedBlocks = this.createBlocks();
    this.emptyIndexes = this.emptyIndexes();
  }

  save = playerState => {
    localStorage.setItem('initialSudoku', this.sudokuString);
    localStorage.setItem('playerSudokuState', playerState);
  };

  load = () => {
    const initialSudoku = localStorage.getItem('initialSudoku');
    const playerSudokuState = localStorage.getItem('playerSudokuState');
    if (initialSudoku !== null && playerSudokuState !== null) {
      return {
        initialSudoku,
        playerSudokuState
      };
    }
  };

  emptyIndexes = () => {
    const indexes = [];
    this.sudokuArray.map((x, i) => {
      if (x === '.') {
        indexes.push(i);
      }
    });
    return indexes;
  };

  createBlocks = () => {
    const arrays = [];
    this.sudokuArray.map((item, i) => {
      if ([0, 3, 6, 27, 30, 33, 54, 57, 60].includes(i)) {
        const block = this.createBlock(this.sudokuArray, i);
        arrays.push(block);
      }
    });
    return arrays;
  };

  createBlock = (sudokuStringAsArray, i) => {
    return [
      {
        i: i,
        value: sudokuStringAsArray[i]
      },
      {
        i: i + 1,
        value: sudokuStringAsArray[i + 1]
      },
      {
        i: i + 2,
        value: sudokuStringAsArray[i + 2]
      },
      {
        i: i + 9,
        value: sudokuStringAsArray[i + 9]
      },
      {
        i: i + 10,
        value: sudokuStringAsArray[i + 10]
      },
      {
        i: i + 11,
        value: sudokuStringAsArray[i + 11]
      },
      {
        i: i + 18,
        value: sudokuStringAsArray[i + 18]
      },
      {
        i: i + 19,
        value: sudokuStringAsArray[i + 19]
      },
      {
        i: i + 20,
        value: sudokuStringAsArray[i + 20]
      }
    ];
  };
}

export default Sudoku;
