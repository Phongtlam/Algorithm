// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

// 1. Immediate return case is if empty list or if there is only one element;
// 2. Have 2 runner, first and second. First one moves until n === 0 then second runner moves
// 3. when first gets to the end node, the second runner is essentially the node right before the removal node
// 4. If n is now 0, we only need to connect second.next to second.next.next, thus removing that node
//    else, we know that second node has not moved yet, that means the removal node is the first node, just need to set head to head.next

var removeNthFromEnd = function(head, n) {
	if (head === null || head.next === null) {
		return null;
	}
	let first = head;
	let second = head;
	while (first.next) {
		first = first.next;
		if (n > 0) {
			// decrementing n til 0
			n--;
		} else {
			// when n === 0, second runner starts moving
			second = second.next;
		}
	}
	if (n === 0) {
		second.next = second.next.next;
	} else { // it will always be 1
		head = head.next;
	}
	return head;
};