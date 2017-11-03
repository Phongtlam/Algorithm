// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
// Note:
// Each element in the result must be unique.
// The result can be in any order.

// First assumption is that we can do indexOf while iterating through one to find
// the answer. However, this will cause a few issues of repeating elements as well
// as not very fast (O(N^2)).
//
// How to improve? Any problem with 'unique' return, we can assume a hash table. Make two
// hash tables to make sure no duplicate. And remember to convert key strings to ints

var intersection = function(nums1, nums2) {
    var hash1 = {};
    for (var i=0; i<nums1.length; i++) {
        var t = nums1[i];
        hash1[t] = hash1[t] ? hash1[t]+1 : 1
    }
    var res = [];
    var hash2 = {};
    for (i=0; i<nums2.length; i++) {
        var t = nums2[i];
        if (hash1[t]) {
            hash2[t] = true;
        }
    }
    for (var prop in hash2) {
        res.push(parseInt(prop));
    }
    return res;
};
