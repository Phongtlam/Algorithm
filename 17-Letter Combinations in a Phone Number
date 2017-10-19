// Problem 17 - Letter Combinations of a Phone Number

// Given a digit string, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// We first loop through the digits and compared that with the existing letters array.

// The 'gotcha' here is to seed the queue with an empty string as the first index.
// We check if the front of the queue has the same length as the current index, pop out that value and
// iterate through the letters array, append the values in sequence, then put it back to the
// end of the queue.

var letterCombinations = (digits) => {
  if (digits.length === 0) return [];
  var letters = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var res = [''];
  for (var i=0; i<digits.length; i++) {
    var curr = digits[i];
    while(res[0].length === i) {
      var temp = res.shift();
      for (var j=0; j<letters[curr].length; j++) {
        res.push(temp + letters[curr][j]);
      }
    }
  }
  return res;
};
