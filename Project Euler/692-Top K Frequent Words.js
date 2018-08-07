// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

var topKFrequent = function(words, k) {
    let hash = {};
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (hash[ word ] === undefined) {
            hash[ word ] = 1;
        } else {
            hash[ word ] += 1;
        }
    }
    let wordMap = Object.keys(hash).map(key => [key, hash[key]]);
    wordMap = wordMap.sort((a, b) => {
        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    console.log(wordMap)
    let result = [];
    for (let i = 0; i < wordMap.length; i++) {
        if (k > 0) {
            result.push(wordMap[i][0]);
            k--;
        } else {
            break;
        }
    }
    return result;
};