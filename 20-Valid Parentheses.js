// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

// This is an example of a queue. We basically use push pop to validate the string

var isValid = function(s) {
    var hash = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    var temp = [];
    for (var i=0; i<s.length; i++) {
        if (hash[s.charAt(i)] !== undefined) {
            temp.push(hash[s.charAt(i)]);
        } else {
            var pop = temp.pop();
            if (pop !== s.charAt(i)) return false;
        }
    }
    return true ? temp.length === 0 : false;
};
