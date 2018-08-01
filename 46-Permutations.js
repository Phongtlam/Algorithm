// Given a collection of distinct integers, return all possible permutations.

// Example:

// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// general backtracking
var permute = function(nums) {
    let result = [];
    
    function backtrack(current) {
        if (current.length === nums.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
					// skip if this value already exists
            if (current.indexOf(nums[i]) >= 0) continue;
            backtrack([...current, nums[i]]);
        }
    }
    
    backtrack([]);
    return result;
};