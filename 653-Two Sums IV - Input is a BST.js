// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.
//
// Example 1:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 9
//
// Output: True
// Example 2:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 28
//
// Output: False

// A twist on two sum problem. Similar algo but with a BST traversal

var findTarget = function(root, k) {
    if (!root) return;
    var hash = {};

    function DFS (root) {
        if (!root) return false;
        if (hash[root.val] === undefined) {
            hash[k-root.val] = root.val;
        } else {
            return true;
        }
        return DFS(root.left) || DFS(root.right);
    }
    return DFS(root);
};
