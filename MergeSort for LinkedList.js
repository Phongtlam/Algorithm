class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

Node.prototype.add = function(val) {
  let curr = this;
  while (curr.next !== null) {
    curr = curr.next;
  }
  curr.next = new Node(val);
  return this;
}

Node.prototype.mergeSort = function() {
  if (!this || !this.next) return this;
  let mid = this.findMid();
  let left = this;
  let right = mid.next;
  mid.next = null;
  return merge(left.mergeSort(), right.mergeSort());
}

function merge(left, right) {
  let l = left;
  let r = right;
  let head = new Node();
  let curr = head;
  while (l && r) {
    if (l.val < r.val) {
      curr.next = l;
      l = l.next;
    } else {
      curr.next = r;
      r = r.next;
    }
    curr = curr.next;
  }
  curr.next = (!l) ? r : l;
  return head.next;
}

Node.prototype.findMid = function() {
  let slow = this;
  let fast = this;
  while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
