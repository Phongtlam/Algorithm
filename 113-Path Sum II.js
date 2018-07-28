// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

// Note: A leaf is a node with no children.

// Example:

// Given the below binary tree and sum = 22,

//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:

// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

// Fairly tricky question. If we can guarantee the result to have only one answer, then we can employ a simular tactic like with pathsum 1

// However, to accomodate for multiple answers, we need to modify the intake since we cannot simply returning from the leaf and recurse back

var pathSum = function(root, sum) {
	if (!root) return [];
	let result = [];
	
	function DFS(node, currValue, arrayList) {
			if (!node) return;
			// We HAVE to compute the currValue in here, since we pass 0 at the root level, I tried to do currValue + node.val at the if left and right but it is not correct
			currValue += node.val
			if (!node.left && !node.right) {
				// this is at the leaf, we can check if currValue is now the sum, if it is, we have 1 answer
					if (currValue === sum) {
							result.push([...arrayList, node.val]);
					}
			}
			// we also have to clone the array list, since simply do array push and passing in, it will remain as the same array throughout and the answer will not be correct
			// at each recursive call, the array has to be new and unique to that path
			if (node.left ) DFS(node.left, currValue, [...arrayList, node.val]);
			if (node.right ) DFS(node.right, currValue, [...arrayList, node.val]);
	}
	
	DFS(root, 0, []);
	
	return result;
};

// A different way, a bit less performant since this travels all the way to the null

var pathSum = function(root, sum) {
	if (!root) return [];
	let result = [];
	function DFS(node, currValue, arrayList) {
		if (node) {
			// calculate currValue at each step
			currValue -= node.val;
			// recompute new arrayList, this has to be new at each step
			arrayList = arrayList.concat(node.val);
			if (currValue === 0 && !node.left && !node.right) {
				result.push(arrayList);
			}
			DFS(node.left, currValue, arrayList);
			DFS(node.right, currValue, arrayList);
		}

	}
	DFS(root, sum, []);
	return result;
};