// You are given a binary tree in which each node contains an integer value.

// Find the number of paths that sum to a given value.

// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:

// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:

// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

// similar to pathsum 2. 
// However, we need to do a recursion if the current node has children, reuse pathsum2 formula

var checkSum = function(root, sum, result = 0) {
	if (!root) return result;
	function DFS(node, currValue) {
		if (node) {
			currValue -= node.val;
			if (currValue === 0) {
				result++;
			}
			DFS(node.left, currValue);
			DFS(node.right, currValue);
		}
	}
	DFS(root, sum);
	return result;
};

function pathSum(root, sum) {
if (!root) return 0;
let result = checkSum(root, sum);
// if left or right branch exists, we do pathSum on both. Divide and conquer method
if (root.left) result += pathSum(root.left, sum);
if (root.right) result += pathSum(root.right, sum);
return result;
}