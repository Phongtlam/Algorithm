// Given a binary tree, return the inorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?

// We need to use a stack

var inorderTraversal = function(root) {
    let current = root;
    let stack = [];
		let result = [];
		// This OR statement is important to start the first push
    while (current || stack.length > 0) {
        if (current) {
					// we keep going left until current is null
            stack.push(current);
            current = current.left;
        } else {
					// if current is null, we have reached the end, now we pop the stack out and set current to right after we print the pop value
					// repeat line 23 again
            let pop = stack.pop();
            result.push(pop.val);
            current = pop.right;
        }
    }
    return result;
};