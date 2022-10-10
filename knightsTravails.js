const squareFactory = (x, y, currentPath) => {
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

  return { x, y, currentPath, moves };
};

function isValidMove(x, y) {
  return x > -1 && x < 8 && y > -1 && y < 8;
};

const knightMoves = (start, end) => {
  let startX = start[0];
  let startY = start[1];
  let endX = end[0];
  let endY = end[1];

  if (!isValidMove(startX, startY) || !isValidMove(endX, endY)) {
    console.log("Error: Please enter a valid position (0-7).")
  } else {
    // perform breadth first search
    let currentSquare = squareFactory(startX, startY, [start]);
    let newPath;
    let queue = [currentSquare];

    while(queue.length !== 0) {
      // check if destination has been reached
      if (queue[0].x === endX && queue[0].y === endY) {
        let finalPath = queue[0].currentPath;
        console.log(`You made it in ${finalPath.length - 1} move(s)! Here's your path:`);

        finalPath.forEach(move => console.log(move));
        return;
      }

      // add all possible moves to queue
      queue[0].moves.forEach(move => {
        newPath = queue[0].currentPath.slice(0);
        newPath.push(move);
        queue.push(squareFactory(move[0], move[1], newPath));
      });

      // remove first element of queue
      queue.shift();
    }
  }
};

knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 7]);
