// Given an array of strings, group anagrams together.
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.

// short each strings and input into a hash 

var groupAnagrams = function(strs) {
    if (strs.length === 0) return [];
    var hash = {};
    for (var i=0; i<strs.length; i++) {
        var t = strs[i].split('').sort().join('');
        if (!hash[t]) {
            hash[t] = [strs[i]];
        } else {
            hash[t].push(strs[i])
        }
    }
    var res = [];
    for (var prop in hash) {
        res.push(hash[prop]);
    }
    return res;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
