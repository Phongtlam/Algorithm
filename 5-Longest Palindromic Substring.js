// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

// 1. Brute force solution: We will loop through every substring and run checkPal function on it. O(N^3)

var longestPalindrome = function(s) {
	if (s.length < 2) return s;
	let maxLng = 0;
		let maxStr = ''
	for (let i = 0; i < s.length; i++) {
		for (let j = i; j <= s.length; j++) {
			let subStr = s.substring(i, j);
			if (checkPal(subStr)) {
				if (maxLng < subStr.length) {
					maxLng = subStr.length;
					maxStr = subStr;
				}
			}
		}
	}
	return maxStr;
	};

function checkPal(str) {
	let i = 0;
	let j = str.length - 1;
	while (i <= j) {
		if (str.charAt(i) !== str.charAt(j)) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

// 2. O(N^2) with O(N) space solution. This is much better in run time since we will check palindrome based around a center point
// record the palindrome length on a separate array then iterate through it at the end to find the largest length

var longestPalindrome = function(s) {
	if (s.length < 2) return s;
	let helperArray = [];
	let ans = [1, 0];
	for (let i = 0; i < s.length; i++) {
    let odd = palindromChecker(s, i, false);
    let even = palindromChecker(s, i, true);
		helperArray[i] = odd > even ? odd : even;
		// dont need to run every single index, if the result / 2 + current index is larger than the length, then we can stop
		if (helperArray[i] / 2 + i > s.length) break;
	}
	for (let i = 0; i < helperArray.length; i++) {
		// some speed improvement since we don't need to check every single indx
		if (helperArray[i] / 2 + i > helperArray.length) break;
		if (ans[0] < helperArray[i]) {
			ans[0] = helperArray[i];
			ans[1] = i;
		}
	}
	return constructAnswer(s, ans[1], ans[0], ans[0] % 2 === 0);
}

function constructAnswer(s, index, palLng, even) {
	let half = Math.floor(palLng / 2);
  return s.substr(index - half, palLng);
}

function palindromChecker(s, index, even) {
	let left = index - 1;
	let right = index + 1;
	let palLng = 1;
  if (even) {
    if (s.charAt(index) !== s.charAt(left)) return 1;
    right = index;
    palLng = 0;
  }
	while (left >= 0 && right <= s.length) {
		if (s.charAt(left) !== s.charAt(right)) {
			break;
		} else {
			palLng += 2;
		}
    left--;
    right++;
	}
	return palLng;
}

