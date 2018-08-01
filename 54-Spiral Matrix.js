// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// the trick is we deal with layer by layer
var spiralOrder = function(matrix) {
	// base case solution, if the matrix is empty
  if (matrix.length === 0 || matrix[0].length === 0) return [];
	let result = [];
	
	// Imagine it is a square and we have row start and end, as well as col start and end
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
	let colEnd = matrix[0].length - 1;
	
	// We know the answer has to be equal to the area of the matrix, so we iterate it until the condition is met
  while (result.length < matrix.length * matrix[0].length) {
		// top and right side are simple
		// we start at colStart and end at colEnd, to iterate the row
    for (let i = colStart; i <= colEnd; i++) {
      result.push(matrix[rowStart][i]);
		}
		// we start at rowStart + 1, since we already traverse the entire row, so we skip that value, and iterate through to rowEnd for col
    for (let i = rowStart + 1; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
		}
		
		// for the next 2, we need a conditional check, in the event that the matrix is 1 dimensional
		// concept is similar, but we will loop backward, right to left and bottom up
    if (rowStart < rowEnd) {
        for (let i = colEnd - 1; i > colStart; i--) {
          result.push(matrix[rowEnd][i]);
        }
    }
    if (colStart < colEnd) {
        for (let i = rowEnd; i > rowStart; i--) {
          result.push(matrix[i][colStart]);
        }
    }

		// we then close down the layer, to get to the next inner layer
    rowStart++;
    rowEnd--;
    colStart++;
    colEnd--;
  }

  return result;
};