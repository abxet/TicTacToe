import { useState } from "react";
import Square from "./Square.jsx";
import { resetGame } from "../utils/reset.js";
import { calculateWinner } from "../utils/calculateWinner.js";
import Reset from "./Reset.jsx";
import '../css/Board.css'

const Board = () => {
  // making initial state by reset function
  const initial = resetGame();
  const [squares, setSquares] = useState(initial.squares);
  const [xNext, setXnext] = useState(initial.xNext);

  const handleClick = (index) => {
    // check if it is already marked or winner exists
    const result = calculateWinner(squares);
    if (squares[index] || (result && result.winner)) return;

    // create a copy of current array
    const next = squares.slice();
    // update the copy (was using undeclared `i` before)
    next[index] = xNext ? "X" : "O";
    // replace the original
    setSquares(next);
    // swap the user
    setXnext((prev) => !prev);
  };

  // getting result and status
  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winLine = result ? result.winningLine : []; // default to empty array to avoid null
  const status = winner
    ? `Winner: ${winner}`
    : squares.every((square) => square !== null)
    ? "Draw"
    : `Next Player: ${xNext ? "X" : "O"}`;

  // resetting
  const reset = () => {
    const resetted = resetGame();
    setSquares(resetted.squares);
    setXnext(resetted.xNext);
  };

  // rendering function for each row
  const row = (r) => (
    <div className="row" key={r}>
      {[r, r + 1, r + 2].map((i) => (
        <Square
          key={i}
          value={squares[i]}
          onClick={() => handleClick(i)} // pass a function, not call immediately
          isWinner={winLine.includes(i)} // method is includes, and winLine is at least []
        />
      ))}
    </div>
  );

  return (
    <div>
      <div className="status">{status}</div>
      {row(0)}
      {row(3)}
      {row(6)}
      <div>
        <Reset onReset={reset} />
      </div>
    </div>
  );
};

export default Board;
