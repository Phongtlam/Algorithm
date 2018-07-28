// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \      \
// 7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

// simply traverse to the leaf node where !left and !right and return
var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) {
        return root.val === sum;
		}
		// at each level, we pass a sum - root.val down
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

// Can you modify to trace which values contained in the path sum?

var hasPathSum = function(root, sum, result = []) {
	if (!root) return false;
	if (!root.left && !root.right) {
			if (root.val === sum) {
				// if it is true, we now have the reult and passing it back up the chain. The result will be constructed bottom up
				// change push to unshift on line 41 you will get them in the top down order
					result.push(root.val);
					return true;
			}
	}
	if (hasPathSum(root.left, sum - root.val, result) || hasPathSum(root.right, sum - root.val, result)) {
			result.push(root.val);
			return result;
	}
};