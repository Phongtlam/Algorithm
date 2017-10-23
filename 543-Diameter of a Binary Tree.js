// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
//
// Example:
// Given a binary tree
//           1
//          / \
//         2   3
//        / \
//       4   5
// Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
//
// Note: The length of path between two nodes is represented by the number of edges between them.

// This problem is a bit tricky. The 'gotcha' here is to realize that the path does not need to
// come directly from the root. Basically at every node, we need to check the max so far
// and returning back to the original root.

var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    var max = 0;
    function DFS(root) {
        if (!root) return 0;
        var left = DFS(root.left);
        var right = DFS(root.right);
        max = Math.max(max, left + right);
        return Math.max(left,right) + 1;
    }
    DFS(root);
    return max;
};

// my original solution here, this will however only goes from root to leaves, it
// will miss out the cases that the max can be found from other than root node.

var diameterOfBinaryTree = function(root) {
    if (!root) return 0;

    function DFS(root, count) {
        if (!root) return count;
        var left = DFS(root.left, count+1);
        var right = DFS(root.right, count+1);
        return Math.max(left, right);
    }

    var left = DFS(root.left, 0);
    var right = DFS(root.right, 0);
    return left + right;
};
