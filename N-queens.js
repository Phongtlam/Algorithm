// N queens solver with backtracking

function solver(n) {
  let result = [];
  function backtrack(row, positions) {
    if (row === n) {
      result.push(positions);
      return;
    }
    for (let i = 0; i < n; i++) {
      let isValid = true;
      for (let j = 0; j < positions.length; j++) {
        if (
          positions[j] &&
          (
            positions[j].row === row ||
            positions[j].col === i ||
            positions[j].col + positions[j].row === row + i ||
            positions[j].col - positions[j].row === i - row
          )
        ) {
          isValid = false;
          break;
        } 
      }
      if (isValid) {
        if (backtrack(row + 1, positions.concat(new Position(row, i)))) {
          return true;
        };
      }
    }
    return false;
  }
  backtrack(0, []);
  return result;
}

class Position {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}

console.log(solver(4))

[ [ Position { row: 0, col: 1 },
    Position { row: 1, col: 3 },
    Position { row: 2, col: 0 },
    Position { row: 3, col: 2 } ],
  [ Position { row: 0, col: 2 },
    Position { row: 1, col: 0 },
    Position { row: 2, col: 3 },
    Position { row: 3, col: 1 } ] ]
