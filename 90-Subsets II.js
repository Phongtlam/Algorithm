// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

// Note: The solution set must not contain duplicate subsets.

// Example:

// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

// This is much similar to subset 1 with 2 exceptions
var subsetsWithDup = function(nums) {
		let result = [];
		
		// we need to sort the items(UNIQUE to subset 2)
    nums = nums.sort((a, b) => a - b);
    
    function backtrack(current, start) {
        result.push(current);
        for (let i = start; i < nums.length; i++) {
						// we need to skip (UNIQUE to subset 2)
            if (i > start && nums[i] === nums[i - 1]) continue;
            backtrack([...current, nums[i]], i + 1);
        }
    }
    
    backtrack([], 0);
    
    return result;
};