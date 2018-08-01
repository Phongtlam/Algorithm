// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// Example:

// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

var permuteUnique = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let aux = [];
    let result = [];
    function backtrack(current) {
        if (nums.length === current.length) {
            result.push(current);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (aux[i] || (i > 0 && nums[i] === nums[i - 1] && !aux[i - 1])) continue;
            aux[i] = true;
            backtrack(current.concat(nums[i]));
            aux[i] = false;
        }
    }
    backtrack([]);
    return result;
};