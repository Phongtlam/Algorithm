// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note: You are not suppose to use the library's sort function for this problem.

// Example:

// Input: [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Follow up:

// A rather straight forward solution is a two-pass algorithm using counting sort.
// First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
// Could you come up with a one-pass algorithm using only constant space?

// a simpler quicksort with 3 ways partitioning
var sortColors = function(nums) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid = 0;

  while (mid <= hi) {
		// all 0s to front, all 2s to the back and 1 stay
    if (nums[mid] === 0) {
      swap(nums, mid, lo);
      lo++;
      mid++;
    } else if (nums[mid] === 2) {
      swap(nums, mid, hi);
      hi--;
    } else {
      mid++;
    }
  }

};

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}