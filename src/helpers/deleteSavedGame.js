export const deleteSavedGame = () => {
  localStorage.removeItem('initialSudoku');
  localStorage.removeItem('playerSudokuState');
  localStorage.removeItem('sudokuDifficulty');
  localStorage.removeItem('sudokuPlayedTime');
};
