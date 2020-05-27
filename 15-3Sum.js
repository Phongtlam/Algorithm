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
	if (nums.length < 3) return [];
	let result = [];

	// sort by ascending
	nums = nums.sort((a, b) => a - b);

	// we now need to loop from 0 to index before the last, since last 1 is checked via r below
	for (let i = 0; i < nums.length - 2; i++) {

			// optional for performance, if the current sorted value is greater than sum, there is no need to check anymore
			if (nums[i] > 0) {
				return result;
			}

			// this is to remove duplicate in i idx bound
			if (nums[i] === nums[i - 1]) {
					continue;
			}

			// repeat 2sum strategy
			let l =  i + 1;
			let r = nums.length - 1;
			while (l < r) {
					if (nums[i] + nums[l] + nums[r] > 0) {
							r--;
					} else if (nums[i] + nums[l] + nums[r] < 0) {
							l++;
					} else {
							result.push([nums[i], nums[l], nums[r]]);
							// we need these 2 while loops to get rid off duplicates with lower and upper bounds
							// while (l < r && nums[l] === nums[l + 1]) l++;
							while (l < r && nums[r] === nums[r - 1]) {
								r--;
							}

							// after that we still need to close down the lower and upperbound
							l++;
							r--;
					}
			}
	}
	
	return result;
};

console.log('what is ?', threeSum([1,2,-2,-1]))
