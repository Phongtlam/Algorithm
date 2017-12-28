// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

var wordPattern = function(pattern, str) {
    str = str.split(' ');
    if (pattern.length !== str.length) return false;
    var hashPat = {};
    var hashStr = {};
    for (var i=0; i<pattern.length; i++) {
        if (hashPat[pattern[i]]) {
            // pattern has word associated
          if (hashPat[pattern[i]] !== str[i]) return false;
        } else {
            // pattern with NO word
            if (hashStr[str[i]]) {
               /// seen word before
              return false;
            } else {
                // new pattern new word
              hashStr[str[i]] = true;
            }
            hashPat[pattern[i]] = str[i];
        }
    }
    return true;
};
