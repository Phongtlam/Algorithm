// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

// Example:

// Given array nums = [-1, 2, 1, -4], and target = 1.

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

// We first need to sort it
// Use 3 pointers l, r and i
// We essentially close down the possibility with the search since we know there can only be one ans
// if the sum > target, we need to move r down, sum > target move l up, else that is the answer and can return right away
// We also need to process the difference since this extra requirement is tricky. However we can handle it via abs diff at each interval

var threeSumClosest = function(nums, target) {
	let sorted = nums.sort((a, b) => a - b);
  let diff = Number.POSITIVE_INFINITY;
  let lowestDiff = 0;
	for (let i = 0; i < sorted.length - 1; i++) {
	let l = i + 1;
	let r = sorted.length - 1;
    while (l < r) {
      let sum = sorted[i] + sorted[l] + sorted[r];
      let absDiff = Math.abs(target - sum);
      if (absDiff < diff) {
        diff = absDiff;
        lowestDiff = sum;
      }
      if (sum > target) {
        r--;
      } else if (sum < target) {
        l++;
      } else {
        // we found the answer directly
        return sum;
      }
    }
	}
  return lowestDiff;
};
