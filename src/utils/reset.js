const emptyArray = () => Array(9).fill(null); // implicit return

export const resetGame = () => ({
  squares: emptyArray(),
  xNext: true,
});
