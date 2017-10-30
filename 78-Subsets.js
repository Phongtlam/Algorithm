// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// Steps to consider doing iteratively
//
// Initially: [[]]
// Adding the first number to all the existed subsets: [[], [1]];
// Adding the second number to all the existed subsets: [[], [1], [2], [1, 2]];
// Adding the third number to all the existed subsets: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]].

var subsets = function(nums) {
  var res = [[]];
  for (var i=0; i<nums.length; i++) {
    // this is important so it does not loop forever
    var lng = res.length;
    for (var j=0; j<lng; j++) {
      res.push(res[j].concat(nums[i]));
    }
  }

  return res;
};
