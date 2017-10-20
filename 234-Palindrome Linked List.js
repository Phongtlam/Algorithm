// Given a singly linked list, determine if it is a palindrome.

// The problem can be solved easily with N space. Storing all nodes in an array
// and check if the array is a palindrome.
//
// The follow-up to this requires O(1) space. We can achieve that by traversing the
// linked list to half way, reverse one half then compare them.

var isPalindrome = (head) => {
  if (!head || !head.next) return true;
  var slow = head;
  var fast = head;
  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  fast = rev(slow);
  slow = head;
  while (slow && fast) {
    if (slow.val !== fast.val) return false;
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

var rev = (head) => {
  if (!head) return head;
  var curr = head;
  var prev = null;
  while(curr) {
    var t = curr.next;
    curr.next = prev;
    prev = curr;
    curr = t;
  }
  return prev;
}
