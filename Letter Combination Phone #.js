/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  var alphabets = {...["0", "1", 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']};

  var result = alphabets[digits[0]].split("");

  for (var i = 1; i < digits.length; i++)  {
    var curr = alphabets[digits[i]];
    while (result[0].length === i) {
      var shift = result.shift();
      for (var j = 0; j < curr.length; j++) {
        result.push(shift + curr[j]);
      }
    }
  }
  return result;
};

console.log(letterCombinations("23"))