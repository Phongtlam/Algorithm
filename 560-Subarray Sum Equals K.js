// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

// First DP solution, we create an aux array that store the sum of the entire array up to index i
var subarraySum = function(nums, k) {
		if (nums.length === 0 || k === undefined) return 0;
		// prefeed the aux array with first index since the sum up to aux[0] is nums[0]
    let aux = [nums[0]];
		let result = 0;
		// fill out the aux array
    for (let i = 1; i < nums.length; i++) {
        aux[i] = aux[i - 1] + nums[i];
		}
		// we traverse the nums array and the aux array
    for (let i = 0; i < nums.length; i++) {
				// this is for a subarray of lng 1
        if (aux[i] === k) {
            result++;
				}
				// aux[i] + k === aux[j]
				// do a comparator from those 2 points and increment result count
        for (let j = i + 1; j < aux.length; j++) {
            if (aux[j] - aux[i] === k) {
                result++;
            }
        }
    }
    return result;
};

// Faster solution using a hash map and O(N) run time. Expanding from above solution
// We have a sum that continuously go through the entire array
var subarraySum = function(nums, k) {
	if (nums.length === 0 || k === undefined) return 0;
	let result = 0;
	// store the sum in hash in the form of sum: num. of occurences
	let hash = {};
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
			sum += nums[i];
			// if the sum at that point is k, we have 1 answer
			if (sum === k) {
					result++;
			}
			// if sum - k exists, the result now will now include all previous occurences
			if (hash[sum - k] !== undefined) {
				result += hash[sum - k];
			}
			// register current sum and its occurences in the hash
			hash[sum] = hash[sum] === undefined ? 1 : hash[sum] + 1;
	}
	return result;
};
