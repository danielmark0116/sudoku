module.exports = function() {
  const initialSudoku = localStorage.getItem('initialSudoku');
  const playerSudokuState = localStorage.getItem('playerSudokuState');
  const sudokuDifficulty = localStorage.getItem('sudokuDifficulty');
  const sudokuPlayedTime = localStorage.getItem('sudokuPlayedTime');

  return {
    initialSudoku,
    playerSudokuState,
    sudokuDifficulty,
    sudokuPlayedTime
  };
};
