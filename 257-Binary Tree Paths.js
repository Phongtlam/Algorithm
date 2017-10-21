// Given a binary tree, return all root-to-leaf paths.
//
// For example, given the following binary tree:
//
//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:
//
// ["1->2->5", "1->3"]

// DFS traversal. We concat string at each node and push into res array when reaching the end.

var binaryTreePaths = (root) => {
    if (!root) return [];
    var res = [];
    function DFS(root, str) {
        if (!root) return;
        if (!root.left && !root.right) {
          res.push(str + root.val);
        }
        str += root.val + '->';
        if (root.left) DFS(root.left, str);
        if (root.right) DFS(root.right, str);
    }
    DFS(root, '')
    return res
};
