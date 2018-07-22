// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

// Two different ways to solve this problem.

// This solution, we use the vanilla way to compute the depth

var maxDepth = function(root) {
		// when the current node is null, we know we have reached the end, returning 0
    if (!root) return 0;
		
		// at every level recursing back, we add 1 to whatever is greater
    function getDepth(node) {
        if (!node) return 0;
        let left = getDepth(node.left);
        let right = getDepth(node.right);
        return 1 + Math.max(left, right);
    }
    
    return getDepth(root);
};


// We use an outside variable to keep check of the result. This solution passing increment the counter as it goes down the depth, rather than backward
var maxDepth = function(root) {
	if (!root) return 0;
	
	let result = 0;
	
	function DFS(node, i) {
			if (!node.left && !node.right) {
					result = Math.max(result, i)
			}
			if (node.left) DFS(node.left, i + 1)
			if (node.right) DFS(node.right, i + 1)
	}
	DFS(root, 1);
	return result;
};