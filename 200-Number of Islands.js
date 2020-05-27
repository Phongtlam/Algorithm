// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

// DFS problem with a twist
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    let counter = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
					// if the grid index is 1, we need to increment counter
            if (grid[i][j] === '1') {
								counter++;
								// the trick is to sink the lands that are attached to it, using recursion
                sinkIsland(grid, i, j);
            }
        }
    }
    return counter;
};

function sinkIsland(grid, i, j) {
    if (i < grid.length || i >= grid.length || grid[i][j] === '0') return;
		grid[i][j] === '0';
		// dfs out from current spot until hitting 0 or out of bounds, 4 directions
    sinkIsland(grid, i + 1, j);
    sinkIsland(grid, i - 1, j);
    sinkIsland(grid, i, j + 1);
    sinkIsland(grid, i , j - 1);
}