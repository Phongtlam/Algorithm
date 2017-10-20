// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
//
// Example 1:
// Input: "aba"
// Output: True

// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.

// This problem is a permutation of string palindrome. We check the string normally.
// However, we have to attempt to skip over should we run into an unmatched pair.
// By utilizing another helper function, we can attempt to keep the traversal location
// of l and h, by checking them both in parallel.

var validPalindrome = (s) => {
  var l = 0;
  var h = s.length-1;
  while (l < h) {
    if (s.charAt(l) !== s.charAt(h)) {
        return isPalindrome(s, l+1, h) || isPalindrome(s, l, h-1);
    }
    l++;
    h--;
  }
  return true;
};

var isPalindrome = (s, l, h) => {
  while (l < h) {
    if (s.charAt(l) !== s.charAt(h)) return false;
    l++;
    h--;
  }
  return true;
}
