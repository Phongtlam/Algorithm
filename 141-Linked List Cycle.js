// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

// Floyd's cycle detection algo
// have a slow and a fast runner, if they match, then its a cycle, else if they run to the end of the list, then its not

var hasCycle = function(head) {
	// base case, if the list is null or only 1 node, it is not a cycle
	if (!head || !head.next) return false
	
	// set two runners
	let slow = head;
	let fast = head;
	
	while(fast.next && fast.next.next) {
			// slow moving 1 node at a time, fast moving at 2
			slow = slow.next;
			fast = fast.next.next;
			// if they match, then its a cycle
			if (slow === fast) return true;
	}
	return false;
};