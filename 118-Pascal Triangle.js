// We do this in 3 steps.
// 1. We fill up the 2D array with empty arrays
// 2. We know the first and last items in each row have to be 1, so we fill it
// 3. Last loop will take care of the empty indices by adding the values from previous rows

var generate = function(numRows) {
	let res = [];
	for (let i = 0; i < numRows; i++) {
			res[i] = [];
	}
	for (let i = 0; i < numRows; i++) {
			res[i][0] = 1;
			res[i][i] = 1;
	}
	for (let i = 0; i < numRows; i++) {
		for (let j = 0; j < res[i].length; j++) {
			if (res[i][j] !== 1) {
				res[i][j] = res[i - 1][j - 1] + res[i - 1][j]
			}
		}
	}
	return res;
};

// find a specific row on pascal triangle

var getRow = function(rowIndex) {
	var currentRow = new Array(rowIndex + 1).fill(1)
	for (i = 1; i <= rowIndex / 2; i ++) {
			const currentCol = (currentRow[i - 1] * (rowIndex - i + 1)) / i
			currentRow[i] = currentRow[rowIndex - i] = currentCol
	}
	return currentRow
}