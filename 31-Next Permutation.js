// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

// The key here is to observe the rise and fall of num seq
// This is a partitioning problem, similar way to do quickSort
// 1. We go right to left, find the first number that starts to drop, that means everything right of that number is in decreasing order
// 2. We swap that number (partition point) with the number on the right, that is the first number larger than the partition pt
// 3. Reverse the array on the right side of the partition
var nextPermutation = function(nums) {
		let firstDrop;
		// iterate from right to left first, and find the point of partition
    for (let i = nums.length - 2; i >= 0; i--) {
				// if the sequence decreases, we have found the first drop point, the point of partitioning
        if (nums[i] < nums[i + 1]) {
            firstDrop = i;
            break;
        }
		}
		// if the partition point is not found, the sequence is decreasing from left to right
		// the answer will be reversing of the sequence as condition number 2
		// return early to end the function
    if (firstDrop === undefined) {
        reverse(nums, 0, nums.length - 1);
        return;
		}
		// if the firstDrop is not undefined, we then need to partition
		// swap the partition point with the value that is the next higher in the right list
    for (let i = firstDrop + 1; i < nums.length; i++) {
				// if the next point in the array is smaller or the same as the partition point, we need to swap
        if (nums[i + 1] <= nums[firstDrop] || nums[i + 1] === undefined) {
            let temp = nums[i];
            nums[i] = nums[firstDrop];
            nums[firstDrop] = temp;
            break;
        }
		}
		// reverse the list on the right side of the partition point
    let lo = firstDrop + 1;
    let hi = nums.length - 1;
    reverse(nums, lo, hi);
};

// helper function to reverse array
function reverse(array, lo, hi) {
    while (lo < hi) {
        let temp = array[lo];
        array[lo] = array[hi];
        array[hi] = temp;
        lo++;
        hi--;
    }
}