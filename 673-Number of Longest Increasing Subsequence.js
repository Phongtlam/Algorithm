// Given an unsorted array of integers, find the number of longest increasing subsequence.

// Example 1:
// Input: [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].

// Example 2:
// Input: [2,2,2,2,2]
// Output: 5
// Explanation: The length of longest continuous increasing subsequence is 1,
// and there are 5 subsequences' length is 1, so output 5.

// This is one of a more standard dynamic programming problem, built upon a similar problem
// (problem 300 - LeetCode).
// Initialize 2 arrays with 1's since we know every single value is at least chainable to
// it self, length of 1 at any given point.
// We then loop through the input array, starting from index 1 to avoid null values.
// The 'trick' here is that we need to be able to record at that current value,
// is there any chainable sequence prior. If the current value nums[i] is greater
// than a value before it nums[j], we know it can be chained. Therefore, we need to record
// that chain into the res output array. The chainable length at the current i value, will
// be the sum of the length before that plus 1.
// We get res[i] = res[j] + 1
// This conditional check seems strange at first "if (res[i] < res[j] + 1)", however it is
// important because we need to only record the greatest length at that current index. Otherwise,
// it will rewrite the current highest value with something else along the chain.
// Recording the countArr values is a bit tricky. We need to increment the count if the current index
// value has appeared before. But we cannot explicitly do res[i] === res[j] as a conditional check,
// because at that point in time in the past, that value is in fact, 1 smaller.

var findNumberOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    var res = [];
    var count = [];

    // initialize 2 arrays
    for (var i=0; i<nums.length; i++) {
        res.push(1);
        count.push(1);
    }
    for (i=1; i<nums.length; i++) {
        for (var j=0; j<i; j++) {
            if (nums[i] > nums[j]) {
                if (res[i] < res[j]+1) {
                    res[i] = res[j]+1;
                    count[i] = count[j];
                } else if (res[i] === res[j]+1) {
                    count[i] += count[j];
                }
            }
        }
    }
    var max = 0;
    var final = 0;
    for (i=0; i<res.length; i++) {
        if (max < res[i]) {
            max = res[i];
            final = count[i];
        } else if (max === res[i]) {
            final += count[i];
        }
    }
    return final;
};
