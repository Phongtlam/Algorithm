// Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

// Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

// Example:
// Input: 
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// This is a rather common problem with a twist. The string input needs to be sanitized
var mostCommonWord = function(paragraph, banned) {
		// first we remake the banned list for faster access
    let bannedList = {};
    for (let i = 0; i < banned.length; i++) {
      bannedList[ banned[i] ] = true;
		}
		// turn the whole paragraph input into lower case
    paragraph = paragraph.toLowerCase();
    let hash = {};
		let str = '';
		// we use 2 pointers to traverse the string
    let runner = 0;
    for (let i = 0; i < paragraph.length; i++) {
				let code = paragraph.charCodeAt(i);
				// check charCode for alphabets only
        if (code >= 65 + 32 && code <= 90 + 32) {
						// we construct the string here, and since the last idx of substring is not inclusive, it'll have to be i+1
            str = paragraph.substring(runner, i + 1);
        } else {
						// if we encounter a non alphabet character, we need to check
						// this check here is important incase of a period/comma, following by a space since it will put the empty string into the hash
            if (str !== '') {
              if (hash[str] === undefined) {
                hash[str] = 1;
              } else {
                hash[str] += 1;
              }
						}
						// reset the substring
						str = '';
						// runner index now catches up
						// it has to be i + 1 since index i is a non alphabet, so we know to skip that value
            runner = i + 1;
        }
		}
		// in the end, we need to check once more time if the string is empty or not, if it is not an empty string, we need to save
    if (str !== '') {
      hash[str] = hash[str] === undefined ? 1 : hash[str] + 1;
		}
		// last part is just iterating through the hash table to find the max value
    let max = 0;
    let word = '';
    Object.keys(hash).forEach(key => {
        if (max < hash[key] && !bannedList[key]) {
            max = hash[key];
            word = key;
        }
    });
    return word;
};