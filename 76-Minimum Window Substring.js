// Smallest Substring of All Characters
//
// Given an array of unique characters arr and a string str, Implement a function getShortestUniqueSubstring that finds the smallest substring of str containing all the characters in arr. Return "" (empty string) if such a substring doesn’t exist.
//
// Come up with an asymptotically optimal solution and analyze the time and space complexities.
//
// Example:
//
// input:  arr = ['x','y','z'], str = "xyyzyzyx"
//
// output: "zyx"

// Start with an extremely naive solution. This will run at O(s^2*arr)
// Generate all substrings that contain all elements in the array, then look for the shortest one

function getShortestUniqueSubstring(arr, str) {
  // your code goes here
  if (str.length < arr.length) return '';
  var tArr = [];
  var tStr = '';
  // generate all possible substrings
  for (var i=0; i<str.length; i++) {
    for (var j=i; j<str.length; j++) {
      var isTrue = true;
      tStr += str.charAt(j);
      // check to see if all elements in arr exist in substring
      for (var k=0; k<arr.length; k++) {
        if (tStr.indexOf(arr[k]) === -1) {
          isTrue = false;
        }
      }
      if (isTrue) {
        tArr.push(tStr);
        tStr = '';
        break;
      }
    }
  }
  // no candidate, immediate return
  if (tArr.length === 0) return '';
  var res = tArr[0];
  var min = str.length;
  for (i=0; i<tArr.length; i++) {
    if (min > tArr[i].length) {
      min = tArr[i].length;
      res = tArr[i];
    }
  }
  return res;
}

// Can we improve this solution? Definitely
// Since we double check alot, we can use two pointers to traverse the string
// This is a VERY difficult problem. Don't worry too much if you are not getting it the first time

var getShortestUniqueSubstring = function(arr, str) {
  if (arr.length > str.length) return '';
  var res = '';

  var arrMap = {};
  var strMap = {};

  // initialize the first hash map. This will accomodate for multiple chars in the array
  for (var i=0; i<arr.length; i++) {
    arrMap[arr[i]] = !arrMap[arr[i]] ? 1 : arrMap[arr[i]]++;
  }

  var left = 0;
  var count = 0;
  var minLng = str.length+1;

  // start iterate through the str
  for (i=0; i<str.length; i++) {

    // if it is in arrMap, thats a possible candidate 
    if (arrMap[str[i]] !== undefined) {
      if (strMap[str[i]] !== undefined) {
        if (strMap[str[i]] < arrMap[str[i]]) {
          count++;
        }
        strMap[str[i]]++;
      } else {
        strMap[str[i]] = 1;
        count++;
      }
    }

    // if count is the same as length, we know we might have reached the candidate substring
    if (count === arr.length) {
      var t = str.charAt(left);
      while (strMap[t] === undefined || strMap[t] > arrMap[t]) {
        if (strMap[t] !== undefined && strMap[t] > arrMap[t]) {
          strMap[t]--;
        }
        left++;
        t = str.charAt(left);
      }

      if (i - left + 1 < minLng) {
        res = str.substring(left, i+1);
        minLng = i - left + 1;
      }
    }
  }
  return res;
}


// console.log(getShortestUniqueSubstring(['x','y','z'], "xyyzyzyx"))
// console.log(getShortestUniqueSubstring(['A', 'B', 'C'], "ADOBECODEBANC'")) // BANC
// console.log(getShortestUniqueSubstring(['A'], 'A'))
