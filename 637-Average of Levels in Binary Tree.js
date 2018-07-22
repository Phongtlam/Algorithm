// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
//
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11.

// DFS traversal solution using 2 arrays. The res array is used to store the sum and the cnt
// array is used to store the total nodes at that level. Using an index, we can control
// where the values will go.

var averageOfLevels = function(root) {
  if (!root) return [];
  var res = [];
  var cnt = [];

  function DFS(root, i) {
    if (!root) return;
    if (res[i] === undefined) {
        res[i] = root.val;
        cnt[i] = 1;
    } else {
        res[i] += root.val;
        cnt[i] += 1;
    }
    DFS(root.left, i+1);
    DFS(root.right, i+1);
  }

  DFS(root, 0);
  for (var i=0; i<res.length; i++) {
    res[i] = res[i]/cnt[i];
  }
  return res;
};

// another way
var averageOfLevels = function(root) {
	var result = [];
	
	function DFS(node, i) {
			if (node) {
					if (result[i] === undefined) {
							result[i] = [node.val]
					} else {
							result[i].push(node.val)
					}
					DFS(node.left, i+1);
					DFS(node.right, i+1);
			}
	}
	DFS(root, 0);
	return result.map( el => el.reduce((sum, one, i) => {
			sum += one;
			if (i === el.length - 1) {
					return sum / (i + 1);
			} else {
					return sum;
			}
	}, 0))
};
