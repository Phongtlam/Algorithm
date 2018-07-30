// Given a 2D board and a list of words from the dictionary, find all words in the board.

// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

// Example:

// Input: 
// words = ["oath","pea","eat","rain"] and board =
// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]

// Output: ["eat","oath"]
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.

// IMPLEMENTATION 1: DFS, this will run at O(M*N) time complexity since we visit every node twice
// We recursively check for every single character, using an aux matrix to keep track of visited nodes
var findWords = function(board, words) {
	const result = {};
	const dict = generateDictionary(words);
	const visited = generateVisited(board.length, board[0].length);
	for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board[i].length; j++) {
					DFS(board, i, j, '', dict, visited, result);
			}
	}
	return Object.keys(result);
};

function DFS(board, i, j, currentWord, dict, visited, result) {
	// base case to return for out of bounds or already visited nodes;
	if (i < 0 || j < 0 || i >= board.length || j >= board[i].length || visited[i][j]) {
		return;
	}
	currentWord += board[i][j];
	visited[i][j] = true;
	// if the word exists in the prefix dictionary,
	if (dict[currentWord] !== undefined) {
			if (dict[currentWord] === currentWord) {
					result[currentWord] = true;
			}
			DFS(board, i + 1, j, currentWord, dict, visited, result);
			DFS(board, i - 1, j, currentWord, dict, visited, result);
			DFS(board, i, j + 1, currentWord, dict, visited, result);
			DFS(board, i, j - 1, currentWord, dict, visited, result);

	}
	// if does not exist, we can stop the recustion and reset visited slot
	// we don't have to reset the string since this will completely terminate ongoing DFS search completely
	visited[i][j] = false;
	return;

}

// Time complexity depends LARGELY on how the dictionary is made. We can use a prefix tree or a hash table to generate prefix entries
// We can optimize the solution to not having to check for every single entries
function generateDictionary(words) {
	let dict = {};
	for (let i = 0; i < words.length; i++) {
			let word = words[i];
			for(let j = 0; j < word.length; j++) {
					let substr = word.substring(0, j + 1);
					if (dict[substr] === undefined) {
							dict[substr] = true;
					}
			}
			dict[word] = word;
	}
	return dict;
}

function generateVisited(height, width) {
	let result = [];
	for (let i = 0; i < height; i++) {
			result[i] = new Array(width).fill(false);
	}
	return result;
}
