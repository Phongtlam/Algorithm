// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.
//
// For example, given
// s = "leetcode",
// dict = ["leet", "code"].
//
// Return true because "leetcode" can be segmented as "leet code".

// This is a dynamic programming problem. The idea is that, we need to know at every index, is it
// true or false

var wordBreak = function(s, wordDict) {
  var dp = [true];
  for (var i=1; i<=s.length; i++) {
    for (var j=0; j<i; j++) {
      if (dp[j] === true && wordDict.indexOf(s.substring(j, i)) !== -1) {
        dp[i] = true;
        break;
      } else {
        dp[i] = false;
      }
    }
  }
  return dp[s.length];
};
