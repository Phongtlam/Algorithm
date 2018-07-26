// You need to find the largest value in each row of a binary tree.

// Example:
// Input: 

//           1
//          / \
//         3   2
//        / \   \  
//       5   3   9 

// Output: [1, 3, 9]

// iterative
var largestValues = function(root) {
    if (!root) return [];
    let final = [];
    let queue = [ root ];
    
    while (queue.length > 0) {
        let lng = queue.length;
        let currentMax = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < lng; i++) {
            let deq = queue.shift();
            currentMax = Math.max(currentMax, deq.val)
            if (deq.left) {
                queue.push(deq.left);
            }
            if (deq.right) {
                queue.push(deq.right);
            }
        }
        final.push(currentMax);
    }
    return final;
};


// recursive
var largestValues = function(root) {
	if (!root) return [];
	let final = [];
	
	function DFS(node, i) {
			if (node) {
					if (final[i] !== undefined) {
							final[i] = Math.max(final[i], node.val);
					} else {
							final[i] = node.val;
					}
					DFS(node.left, i + 1);
					DFS(node.right, i + 1);
			}
	}
	
	DFS(root, 0);
	return final;
};