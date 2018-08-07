// N queens solver with backtracking

function solver(n) {
  let result = [];
  
  // backtracking function
  function backtrack(row, positions) {
    // if row === n, we know that we have reached the end, pushing in the current set of positions and return to break recursion loop
    if (row === n) {
      result.push(positions);
      return;
    }
    // loop through each row to find prospective position
    for (let i = 0; i < n; i++) {
      let isValid = true;
      // check position against existing positions
      for (let j = 0; j < positions.length; j++) {
        if (
          positions[j] &&
          (
            positions[j].row === row ||
            positions[j].col === i ||
            positions[j].col + positions[j].row === i + row ||
            positions[j].col - positions[j].row === i - row
          )
        ) {
          // break out of the loop if it is invalid, since we need to return back the call stack
          isValid = false;
          break;
        } 
      }
      // if it is valid, we go to the next row
      if (isValid) {
        backtrack(row + 1, positions.concat(new Position(row, i)))
      }
    }
    return;
  }
  backtrack(0, []);
  return result;
}

// [ [ Position { row: 0, col: 1 },
//     Position { row: 1, col: 3 },
//     Position { row: 2, col: 0 },
//     Position { row: 3, col: 2 } ],
//   [ Position { row: 0, col: 2 },
//     Position { row: 1, col: 0 },
//     Position { row: 2, col: 3 },
//     Position { row: 3, col: 1 } ] ]
