// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

// The main concept of this problem lies in the getHeight function
// The trick is that, when we get to null, which is all the way to 1 side 

function getMaxDepth(root) {
	// at end of left or right, return 0 to the prev node
	if (!root) return 0;
	// compute left and right side
	let maxLeft = getMaxDepth(root.left);
	let maxRight = getMaxDepth(root.right);

	// since we need to get the height of the tree, we need to return whatever is bigger
	if (maxLeft > maxRight) {
		return 1 + maxLeft;
	} else {
		return 1 + maxRight;
	}
}

var isBalanced = function(root) {
    if (!root) return true;
    
    function getHeight(node) {
				if (!node) return 0;
				// short handed for above getHeight function
        return 1+ Math.max(getHeight(node.left), getHeight(node.right));
		}
		
    // computer left and right parts of the current root node
    let leftHeight = getHeight(root.left);
    let rightHeight = getHeight(root.right);
		
		// if the absolute diff of left and height <= 1, it is a balanced tree
		// HOWEVER, the catch is that, we only tested the current left and right subtree, we then would need to also test the current root value, recursively 
    if (
			Math.abs(leftHeight - rightHeight) <= 1 &&
			// testing current root, if its left and right side are balanced
			isBalanced(root.left) && isBalanced(root.right)) return true;
    return false;
};