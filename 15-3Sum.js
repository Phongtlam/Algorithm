// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < sorted.length - 1; i++) {
		// important check here to remove duplicates
    if (i === 0 || sorted[i] !== sorted[i - 1]) {
			let l = i + 1;
			let r = sorted.length - 1;
			while (l < r) {
				let sum = sorted[i] + sorted[l] + sorted[r];
				if (sum === 0) {
					result.push([ sorted[i], sorted[l], sorted[r] ]);
					while (l < r && sorted[l] === sorted[l + 1]) l++;
					while (l < r && sorted[r] === sorted[r - 1]) r--;
					l++;
					r--;
				} else if (sum > 0) {
					r--;
				} else {
					l++;
				}
			}  
		}
  }
  return result;
};