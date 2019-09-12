module.exports = function() {
  const initialSudoku = localStorage.getItem('initialSudoku');
  const playerSudokuState = localStorage.getItem('playerSudokuState');
  const sudokuDifficulty = localStorage.getItem('sudokuDifficulty');

  return {
    initialSudoku,
    playerSudokuState,
    sudokuDifficulty
  };
};
