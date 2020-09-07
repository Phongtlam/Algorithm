// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note:

// The solution set must not contain duplicate quadruplets.

// Example:

// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]

// This is a fairly complex problem even though it is an extension of 3sum
// Again the idea is that we take an index, calculate its diff and do 3sum from i + 1 til the end
// The while loops are very important in order to get rid off dups, we check current indices at the spot vs their future values, then increment the index accordingly
// l and l + 1
// r and r - 1
// j and j + 1
// i and i + 1

var fourSum = function(nums, target) {
	if (nums.length < 4) return [];
	const sorted = nums.sort((a, b) => a - b);
	let result = [];
	
	for (let i = 0; i < sorted.length - 3; i++) {
			let diff = target - sorted[i];
			
			for (let j = i + 1; j < sorted.length - 2; j++) {
					// if (j > i + 1 && sorted[j] === sorted[j - 1]) continue;

					let l = j + 1;
					let r = sorted.length - 1;
					while (l < r) {
							if (l > j + 1 && sorted[l] === sorted[l - 1]) {
									l++;
									continue;
							}
							let currSum = sorted[j] + sorted[l] + sorted[r];
							if (currSum === diff) {
									result.push([ sorted[i], sorted[j], sorted[l], sorted[r] ]);
									// these 2 while loops are used to get rid off dups in upper and lower bounds in the 3sum
									while (sorted[r] === sorted[r - 1]) r--;
									// to close down the range after finding first target
									l++;
									r--;
							} else if (currSum > diff) {
									r--;
							} else {
									l++;
							}
					}
					// this is to get rid off the dup in j
					while(sorted[j + 1] === sorted[j]) j++;
			}
			// this is to get rid off the dup in i
			while(sorted[i + 1] === sorted[i]) i++;
	}
	return result;
	
};