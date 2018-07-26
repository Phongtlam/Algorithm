// Given a binary tree, find the leftmost value in the last row of the tree.

// Example 1:
// Input:

//     2
//    / \
//   1   3

// Output:
// 1
// Example 2: 
// Input:

//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7

// Output:
// 7
// Note: You may assume the tree (i.e., the given root node) is not NULL.

// iterative
var findBottomLeftValue = function(root) {
    let queue = [ root ];
    let final = [];
    while (queue.length > 0) {
        let lng = queue.length;
        let current = [];
        for (let i = 0; i < lng; i++) {
            let deq = queue.shift();
            current.push(deq.val);
            if (deq.left) {
                queue.push(deq.left);
            }
            if (deq.right) {
                queue.push(deq.right);
            }
        }
        final.push(current);
    }
    return final[ final.length - 1 ][0];
};

// recursive
var findBottomLeftValue = function(root) {
	let result = root.val;
	let currentLevel = 0;
	function DFS(node, i) {
			if (node) {
					if (i > currentLevel) {
							currentLevel = i;
							result = node.val;
					}
					DFS(node.left, i + 1)
					DFS(node.right, i + 1)
			}
	}
	DFS(root, 0);
	return result;
};