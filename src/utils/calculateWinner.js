export function calculateWinner(squares) {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  for (const [a, b, c] of winningLines) {
    if (
      squares[a] &&
      squares[a] === squares[b] && // use strict equality
      squares[a] === squares[c]
    ) {
      return { winner: squares[a], winningLine: [a, b, c] }; // renamed for clarity
    }
  }
  return null;
}
