import '../css/Square.css';

const Square = ({ value, onClick, isWinner }) => {
  const className = "square" + (isWinner ? " winner" : "" + " " + value);
  return (
    <button className={className} onClick={onClick} aria-label={`Square ${value || "empty"}`}>
      {value}
    </button>
  );
};

export default Square;
