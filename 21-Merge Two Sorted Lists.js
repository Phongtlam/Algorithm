// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode();
    let curr = newHead;
    
    while(l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1) {
        curr.next = l1;
    }
    if (l2) {
        curr.next = l2;
    }
    return newHead.next;
};