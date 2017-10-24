// Given a roman numeral, convert it to an integer.
//
// Input is guaranteed to be within the range from 1 to 3999.
//

// This is simple, just loop through and add onto the total value. The 'gotcha'
// here is that if the smaller value is infront of the bigger one, we need
// to subtract instead.

var romanToInt = function(s) {
    var rom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var res = 0;
    for (var i=0; i<s.length; i++) {
        if (rom[s.charAt(i)] < rom[s.charAt(i+1)]) {
            res -= rom[s.charAt(i)];
        } else {
            res += rom[s.charAt(i)];
        }
    }
    return res;
};

// Follow-up: Given an integer, convert it to a roman numeral.
//
// Input is guaranteed to be within the range from 1 to 3999.

// So how do we go backward? There are a few caveats here that we need to keep in mind.
// 1. We cannot have more than 3 of similar chars next to each other (ie. no IIII), so we hardcode them :)
// 2. We use 2 different arrays to cross lookup, rather than 1 object as before
// 3. To find the Roman number, we just need to go from highest down, starting from 1000, 900, 500... 1

var intToRoman = function(num) {
    var rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    var array = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var res = '';
    while (num > 0) {
        for (var i=0; i<array.length; i++) {
            if (num >= array[i]) {
                res += rom[i];
                num -= array[i];
                break;
            }
        }
    }
    return res;
};
