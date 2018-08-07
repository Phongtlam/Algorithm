// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

var intersect = function(nums1, nums2) {
    if (nums1.length === 0 || nums2.length === 0) return [];
    let result = []
    let hash = nums2.reduce((hash, el) => {
        if (hash[el] === undefined) {
            hash[el] = 1;
        } else {
            hash[el] += 1;
        }
        return hash;
    }, {});
    for (let i = 0; i < nums1.length; i++) {
        let curr = nums1[i];
        if (hash[curr]) {
            result.push(curr);
            if (hash[curr] === 1) {
                delete hash[curr];
            } else {
                hash[curr] -= 1;
            }
        }
    }
    return result;
};