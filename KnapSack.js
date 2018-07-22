// 0/1 knapsack problem

const weights = [ 1, 3, 4, 5 ];
const values = [ 1, 4, 5, 7 ];
const w = 7;

const knapSack = (w, weights, values) => {
  const matrix = [];
  // initialize matrix
  for (let i = 0; i < weights.length; i++) {
    matrix[i] = new Array(w).fill(0);
  }
  // generate first row
  for (let j = 0; j <= w; j++) {
    if (j >= weights[0]) {
      matrix[0][j] = values[0];
    }
  }
	// generate matrix
	for (let i = 1; i < weights.length; i++) {
    // j is carrying weight
		for (let j = 0; j <= w; j++) {
      // if carrying weight is less than current weight value, we have to omit that item
      // value will be whatever is previously
			if (j < weights[i]) {
        matrix[i][j] = matrix[i - 1][j];
      }
      // if carrying weight is the same or greater as item,
      // we need to check if item has better value, using the L shape backward to check
      // or if omitting it has better value, which is the max of previous row at same col indx
      else {
        matrix[i][j] = Math.max(values[i] + matrix[i - 1][j - weights[i]], matrix[i - 1][j])
      }
		}    
	}

  // The answer is now at the lowest corner of the matrix

  // Now we need to back track to find the correct items
  // If the currentMaxValue !== the value above it, we know we need to take the current value, 
  // then subtracting the col by weight of current since we still have space

  // If the currentMaxValue === the value above it, we know the current item is not selected, thus row--
  let row = matrix.length - 1;
  let col = w;
  let currMaxValue = matrix[row][col];
  const result = [];
  while (currMaxValue !== 0 && row >= 0) {
    if (currMaxValue === matrix[row - 1][col]) {
      row--;
    } else {
      result.push({
        weight: weights[row],
        value: values[row]
      });
      col -= weights[row];
      currMaxValue = matrix[row][col];
    }
  }
  return result;
}

console.log(knapSack(w, weights, values))
