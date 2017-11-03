// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.

// The goal here is to check from root node, if anything on the left is greater than
// root node, then return false, anything on the right smaller then return false also

// naive solution
var isValidBST = function(root) {
    if (!root) return true;

    function DFS(root, rootVal) {
      if (!root) return true;
      function goLeft(root, rootVal) {
        if (!root) return true;
        if (root.val >= rootVal) return false;
        return goLeft(root.left, rootVal) && goLeft(root.right, rootVal);
      }
      function goRight(root, rootVal) {
        if (!root) return true;
        if (root.val <= rootVal) return false;
        return goRight(root.left, rootVal) && goRight(root.right, rootVal);
      }
      return goLeft(root.left, root.val) && goRight(root.right, root.val);
    }
    var mid = DFS(root, root.val)
    var left = isValidBST(root.left)
    var right = isValidBST(root.right)
    return mid && left && right;
};

// we can modify the solution to just take in min and max, initialize both to null at first stack  

var isValidBST = function(root, min = null, max = null) {
    if(!root) return true;
    if(max !== null && root.val >= max) return false;
    if(min !== null && root.val <= min) return false;

    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};
