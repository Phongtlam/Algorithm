/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums || nums.length === 0 || target === undefined) return [];
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (hash.hasOwnProperty(target - nums[i])) {
      return [hash[target - nums[i]], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

console.log(twoSum([0, 4, 3, 0], 0))