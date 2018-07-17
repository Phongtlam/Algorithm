// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

// Loop left to right and right to left and count sumL and sumR
// This only works if there is one type of parenthesis only

function checkValidString(s) {
    let sumL = 0;
    let sumR = 0;
    let l = 0;
    let r = s.length - 1;
    while(l < s.length && r >= 0) {
        if (s.charAt(l) === '*' || s.charAt(l) === '(') {
            sumL++;
        } else {
            sumL--;
        }
        
        if (s.charAt(r) === '*' || s.charAt(r) === ')') {
            sumR++;
        } else {
            sumR--;
        }

        l++;
        r--;

        if (sumL < 0 || sumR < 0) return false;
    }
    return true;
};