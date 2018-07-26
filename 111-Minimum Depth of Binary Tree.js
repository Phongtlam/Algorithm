
// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

// We need to alter this solution from max depth
// We use a counter from top down strategy

var minDepth = function(root) {
		if (!root) return 0;
		// if to get max depth, we can change this to result = 0 and line 30 becomes Math.max
		// however there is a much more elegant way to solve it in a diff problem
    let result = Number.POSITIVE_INFINITY;
    
    function DFS(node, i) {
				// When there is no leaves left, we can computer the result
        if (!node.left && !node.right) {
            result = Math.min(result, i)
				}
				// if there is left or right branch, we need to keep travel down
        if (node.left) {
            DFS(node.left, i+1);
        }
        if (node.right) {
            DFS(node.right, i+1);
        }
    }
    DFS(root, 1);
    return result;
};