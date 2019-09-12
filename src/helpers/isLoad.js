module.exports = function() {
  const initialSudoku = localStorage.getItem('initialSudoku');
  const playerSudokuState = localStorage.getItem('playerSudokuState');
  if (initialSudoku !== null && playerSudokuState !== null) {
    return true;
  } else {
    return false;
  }
};
