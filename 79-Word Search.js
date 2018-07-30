// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

var exist = function(board, word) {
    let dict = generateDict(word);
    let visited = generateVisited(board[0].length, board.length);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let result = DFS(board, i, j, '', visited, dict);
            if (result) return result;
        }
    }
    return false;
};

function DFS(board, i, j, currentWord, visited, dict) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || visited[i][j]) return;
    visited[i][j] = true;
    currentWord += board[i][j];
    if (dict[currentWord] !== undefined) {
        if (dict[currentWord] === currentWord) {
            return true;
        }
        if (
            DFS(board, i + 1, j, currentWord, visited, dict) ||
            DFS(board, i - 1, j, currentWord, visited, dict) ||
            DFS(board, i, j + 1, currentWord, visited, dict) ||
            DFS(board, i, j - 1, currentWord, visited, dict)
        ) 
        {
            return true;
        }

    }
    visited[i][j] = false;
    return;
}

function generateDict(word) {
    let dict = {};
    for (let i = 0; i < word.length; i++) {
        let current = word.substring(0, i + 1);
        dict[current] = true;
    }
    dict[word] = word;
    return dict;
}

function generateVisited(width, height) {
    let visited = [];
    for (let i = 0; i < height; i++) {
        visited[i] = new Array(width).fill(false);
    }
    return visited;
}