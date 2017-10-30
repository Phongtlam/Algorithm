// Follow up for "Remove Duplicates":
// What if duplicates are allowed at most twice?
//
// For example,
// Given sorted array nums = [1,1,1,2,2,3],
//
// Your function should return length = 5, with the first five elements
// of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

// I am not sure why this is listed as a Medium difficult. The problem is quite simple. Traverse the
// array until you run into a dup, increase the counter. If the counter is greater than 2 then
// you must remove the duplicate using splice since the problem requires a modified array also. In the
// case that it does not, you can simply just make another counter to count the length. This can be modified
// further into any k-value for the max appearance by just having the k value as a variable and set
// count > k in the conditional statement

var removeDuplicates = function(nums) {
    var count = 1;
    for (var i=nums.length-1; i>0; i--) {
        if (nums[i] === nums[i-1]) {
            count++;
            if (count > 2) {
                nums.splice(i, 1);
            }
        } else {
          count = 1;
        }
    }
    return nums.length;
};

// Side note: since the array is sorted, might be able to drastically improve the algo through
// a binary search algo. However the problem is not asked for it specifically and this solution
