// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "abba", answer is "ab", lng of 2

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// The trick here is storing lastSeenIndex into the hash. Whenever we encounter a dup, we reset the first index in longest subStr
// We need to also keep this index at its highest place in the original string

var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    var hash = {};
    var firstIndexInLongestStr = 0;
    var res = 0;
    for (var i=0; i<s.length; i++) {
			if (hash[s.charAt(i)] !== undefined) {
					// We need to also keep this index at its highest place in the original string for cases like "abba" so the 1stIdx does not get set backward
					firstIndexInLongestStr = Math.max(firstIndexInLongestStr, hash[s.charAt(i)] + 1);
			}
			res = Math.max(res, i - firstIndexInLongestStr + 1);
			hash[s.charAt(i)] = i;
		}
    return res;
};
