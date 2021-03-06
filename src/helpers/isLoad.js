module.exports = function() {
  const initialSudoku = localStorage.getItem('initialSudoku');
  const playerSudokuState = localStorage.getItem('playerSudokuState');
  const sudokuDifficulty = localStorage.getItem('sudokuDifficulty');

  if (
    initialSudoku !== null &&
    playerSudokuState !== null &&
    sudokuDifficulty !== null
  ) {
    return true;
  } else {
    return false;
  }
};
