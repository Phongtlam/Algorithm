// Program for Conway’s Game Of Life
// Initially, there is a grid with some cells which may be alive or dead. Our task to generate the next generation of cells based on the following rules:

// Any live cell with fewer than two live neighbors dies, as if caused by under population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

// Example:
let matrix = [
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
]

// Expected output
[ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 1, 1, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 1, 1, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

function conWay(matrix) {
	let result = [];
	// initialize result matrix with the same dimension as original
  for (let i = 0; i < matrix.length; i++) {
    result[i] = new Array(matrix[0].length).fill(0);
  }
  function checkCell(i, j) {
    if (i < 0 || j < 0 || i >= matrix.length || j >= matrix[0].length) return 0;
    return matrix[i][j];
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
			// initialize the count of live cells
			let totalLive = 0;
			// expand in 8 directions to check neighboring cells
      totalLive += 
      checkCell(i - 1, j) + 
      checkCell(i - 1, j - 1) + 
      checkCell(i, j - 1) +
      checkCell(i + 1, j - 1) + 
      checkCell(i + 1, j) + 
      checkCell(i + 1, j + 1) +
      checkCell(i, j + 1) + 
      checkCell(i - 1, j + 1);
      if (matrix[i][j] === 1) {
        if (totalLive < 2) {
          result[i][j] = 0;
        } else if (totalLive === 2 || totalLive === 3) {
          result[i][j] = 1;
        } else if (totalLive > 3) {
          result[i][j] = 0;
        }
      } else {
        if (totalLive === 3) {
          result[i][j] = 1;
        }
      }
    }
  }
  
  return result;
}

// basic DP solution for n future steps of the Conway's game
function futureConway(matrix, n) {
  let result = [ conWay(matrix) ];
  for (let i = 1; i <= n; i++) {
    result[i] = conWay(result[i - 1]);
  }
  return result[n];
}