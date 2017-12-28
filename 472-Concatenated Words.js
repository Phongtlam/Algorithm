// Input: ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
//
// Output: ["catsdogcats","dogcatsdog","ratcatdogcat"]
//
// Explanation: "catsdogcats" can be concatenated by "cats", "dog" and "cats";
//  "dogcatsdog" can be concatenated by "dog", "cats" and "dog";
// "ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".

// This is a more advanced Word Break. We can follow the same idea for the helper function.

const findAllConcatenatedWordsInADict = (words) => {
  if (words.length === 0) return [];
  words.sort((a, b) => a.length - b.length);
  var res = [];
  var helperArray = [];
  for (var i=0; i<words.length; i++) {
    if (helper(words[i], helperArray)) {
      res.push(words[i]);
    }
    helperArray.push(words[i]);
  }
  return res;
};

const helper = (word, words) => {
  if (word.length === 0 || words.length === 0) return;
  var dp = [true];
  for (var i=1; i<=word.length; i++) {
    for (var j=0; j<=i; j++) {
      if (dp[j] && words.indexOf(word.substring(j, i)) !== -1) {
        dp[i] = true;
        break;
      } else {
        dp[i] = false;
      }
    }
  }
  return dp[word.length] ? true : false;
}

// Improved version using a hashtable for quicker lookup

const findAllConcatenatedWordsInADict = (words) => {
  words.sort((a, b) => a.length - b.length);
  var res = [];
  var set = {};
  for (var i=0; i<words.length; i++) {
    if (helper(words[i], set)) {
      res.push(words[i]);
    }
    set[words[i]] = true;
  }
  return res;
};

const helper = (word, words) => {
  var dp = [true];
  for (var i=1; i<=word.length; i++) {
    for (var j=0; j<=i; j++) {
      if (dp[j] === true && words[word.substring(j, i)] === true) {
        dp[i] = true;
        break;
      } else {
        dp[i] = false;
      }
    }
  }
  return dp[word.length] ? true : false;
}
