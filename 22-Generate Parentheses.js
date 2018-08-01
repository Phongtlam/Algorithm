// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

// Backtracking
var generateParenthesis = function(n) {
    let result = [];
    
    function backtrack(str, open, close) {
				// since the total length === 2x the total, we know we have used up all the brackets, this is 1 answer
        if (n * 2 === str.length) {
            result.push(str);
            return;
				}
				// if number of open brackets < total, we add open, increment counter
        if (open < n) {
            backtrack(str + '(', open + 1, close);
				}
				// if number of close brackets < total, we add close, increment counter
        if (close < open) {
            backtrack(str + ')', open, close + 1);
        }
    }
    
    backtrack('', 0, 0);
    return result;
};