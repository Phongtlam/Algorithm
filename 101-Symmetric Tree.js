
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

// A symmetrical tree is both sides r mirrors of each other

var isSymmetric = function(root) {
	// base case, if root is null, it is a mirror by default
	if (!root) return true;
	// function to check left and right branches
	return isMirror(root.left, root.right);
};

function isMirror(root1, root2) {
	// if they r both null, then return true up the stack, else false
	if (!root1 && !root2) return true;
	if (!root1 || !root2) return false;

	// we also need to check if the values of each root r equal also, then run a recursion on subtrees
	return (root1.val === root2.val) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
}