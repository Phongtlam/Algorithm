// Find the sum of all left leaves in a given binary tree.
//
// Example:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24

// Another DFS traversal. These questions can be difficult in knowing when to return
// out of a recursive stack. For this one, we travel left side until there is
// nomore nodes after that, at that point we know it is the end. Just grab that nodes
// value and recursively travel through the entire tree.

var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    var res = 0;
    function DFS(root) {
        if (!root) return 0;
        if (root.left) {
            if (!root.left.left && !root.left.right) {
                res += root.left.val;
            }
        }
        DFS(root.left);
        DFS(root.right);
    }
    DFS(root);
    return res;
};
