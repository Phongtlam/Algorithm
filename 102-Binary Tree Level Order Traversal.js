// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// Travel the tree iteratively with while loop

var levelOrder = function(root) {
	if (!root) {
        return [];
    }
    const result = [];
    const queue = [ root ];
    
    while (queue.length > 0) {
        let lng = queue.length;
        const current = [];
        for (let i = 0; i < lng; i++) {
            let runner = queue.shift();
            current.push(runner.val);
            if (runner.left) {
                queue.push(runner.left)
            }
            if (runner.right) {
                queue.push(runner.right)
            }
        }

        result.push(current)
    }
    
    return result;
};

// Traverse the tree recursively DFS

var levelOrder = function(root) {
	const result = [];
	function DFS(node, i) {
			if (node) {
					DFS(node.left, i+1);
					DFS(node.right, i+1);
					if (result[i] === undefined) {
							result[i] = [node.val];
					} else {
							result[i].push(node.val);
					}
			}
	}
	DFS(root, 0);
	return result;
};