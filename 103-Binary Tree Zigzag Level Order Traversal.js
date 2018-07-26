// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

// iterative
var zigzagLevelOrder = function(root) {
	if (!root) return [];
	let result = [];
	let queue = [ root ];
	
	while (queue.length > 0) {
			let lng = queue.length;
			let current = [];
			for (let i = 0; i < lng; i++) {
					let deq = queue.shift();
					current.push(deq.val);
					if (deq.left) queue.push(deq.left);
					if (deq.right) queue.push(deq.right);
			}
			result.push(current);
	}
	return result.map((el, i) => i % 2 !== 0 ? el.reverse() : el);
};

// recursive
var zigzagLevelOrder = function(root) {
	let result = [];
	
	function DFS(node, i) {
			if (node) {
					if (result[i] !== undefined) {
							result[i].push(node.val);
					} else {
							result[i] = [ node.val ];
					}
					DFS(node.left, i + 1);
					DFS(node.right, i + 1);
			}
	}
	
	DFS(root, 0);
	return result.map((el, i) => i % 2 !== 0 ? el.reverse() : el);
};