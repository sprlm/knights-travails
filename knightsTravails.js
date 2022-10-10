const squareFactory = (x, y) => {
  let moves = getPossibleMoves();

  function isValidMove(x, y) {
    return x > -1 && x < 8 && y > -1 && y < 8;
  };

  function getPossibleMoves() {
    let output = [];
    const direction = [[-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1]];

    direction.forEach(d => {
      let newX = x + d[0];
      let newY = y + d[1];

      if (isValidMove(newX, newY)) {
        output.push([newX, newY]);
      }
    });

    return output;
  };

  return { moves };
};

function isValidMove(x, y) {
  return x > -1 && x < 8 && y > -1 && y < 8;
};

const knightMoves = (start, end) => {
  if (!isValidMove(...start) && !isValidMove(...end)) {
    console.log("Error: Please enter a valid position (0-7).")
  } else {
    let currentSquare = squareFactory(...start);

    console.log(currentSquare.moves);
  }
};

knightMoves([0,0],[3,3]);
