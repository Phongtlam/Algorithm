// quickSort implementation
// The main process of quickSort is sorting in place, as opposed to doing it in merge
// sort fashion. The difference between this and merge sort is in space allocation.

var quickSort = (array, low = 0, high = array.length-1) => {
  if (low > high) return array;
  if (array.length <= 1) return array;
  var pivot = partition(array, low, high);
  quickSort(array, pivot+1, high)
  quickSort(array, low, pivot-1)
  return array;
}

// This is the main process of quickSort. The partition function will process
// all smaller values to the left and all greater values to the right of the pivot point
// There are a few different partition schemes that prioritize different strategies.
// This particular scheme - Lomuto's partition scheme - uses a pivot point chosen at random. This is for performance
// purpose. You can just set the pivot point as the last index too. However, doing so
// will yield a slower run time if the array is already sorted.

var partition = (array, low, high) => {
  if (array.length <= 1 && low > high) return array;
  // var pivot = Math.floor(Math.random()*(high-low)) + low;
  // swap(array, pivot, high);
  let pivot = high;
  var i = low;
  while (low < high) {
    if (array[low] <= array[pivot]) {
      swap(array, low, i);
      i++;
    }
    low++;
  }
  swap(array, i, pivot);
  return i;
}

var swap = (array, i, j) => {
  var t = array[i]
  array[i] = array[j];
  array[j] = t;
}

// Followup problem on LeetCode:
// Find the kth largest element in an unsorted array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// For example,
// Given [3,2,1,5,6,4] and k = 2, return 5.
//
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.

// This utilizes the almost exact process as quickSort. With the check that if the partition
// is the same as the res index (length - k), we know that is the result.
// The array is 'shrunk' down based on the output of the partition. If it is smaller
// than the target result index, we know we can trim up the front, and if it is larger
// than the result index, we know we can trim down the back.

var findKthLargest = (nums, k) => {
  if (nums.length <= 1) return nums[0];
  var res = nums.length - k;
  var low = 0;
  var high = nums.length - 1;
  while (low < high) {
    var i = partition(nums, low, high);
    if (i < res) low = i+1;
    else if (i > res) high = i-1;
    else break;
  }
  return nums[res];
};
