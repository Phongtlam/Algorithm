// Implementation of mergeSort. The algorithm breaks down the arrays into smaller pieces
// and reconnect them. This is less favorable than quickSort for array sortings
// since it will create extra in each recursive stack. However, this is better in
// linked lists due to not needing for instant accessing of index values.

var mergeSort = (array) => {
  if (array.length === 0 || array.length === 1) return array;
  var mid = Math.floor(array.length/2);
  var left = array.slice(0, mid);
  var right = array.slice(mid, array.length);
  return merge(mergeSort(left), mergeSort(right));
};

// This merge function is the meat of the problem.
// After we get two individual halves, we need to compare the first indices of
// each half. The smaller one will go in first and so on. When both halves are done
// we need to add the leftover onto the res array.

// The 'gotcha' here is that we need to do the concatenation at the end of each
// merge operation. Merge sort is a bit easier to write than quickSort, yet more
// difficult in understanding what's going on.

function merge(left, right) {
  var res = [];
  var l = 0;
  var r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l++]);
    } else {
      res.push(right[r++]);
    }
  }
  return res.concat(left.slice(l)).concat(right.slice(r));
}

// Merge sort types of problems

// Merge 2 sorted lists

const mergeSortedLists = (arr1, arr2) => {
  let l = 0;
  let r = 0;
  let res = [];
  while (l < arr1.length && r < arr2.length) {
    if (arr1[l] < arr2[r]) {
      res.push(arr1[l++]);
    } else {
      res.push(arr2[r++]);
    }
  }
  if (l === arr1.length) {
    res = [...res, ...arr2.slice(r)];
  } else {
    res = [...res, ...arr1.slice(l)];
  }
  return res;
}

// merge 2 sorted linkedlists

var mergeTwoLists = function(l1, l2) {
	if (l1 === null) {
			return l2
	}
	if (l2 === null) {
			return l1;
	}
	let tempNode = new ListNode();
	let runner = tempNode;
	while (l1 && l2) {
			if (l1.val < l2.val) {
					runner.next = l1;
					l1 = l1.next;
			} else {
					runner.next = l2;
					l2 = l2.next;
			}
			runner = runner.next;
	}
	if (l1) {
			runner.next = l1;
	}
	if (l2) {
			runner.next = l2;
	}
	return tempNode.next;
};

