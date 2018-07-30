// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

// Extremely naive solution
// Parse the 2 lists out into numbers in str form, reverse them, then add and reverse the total number
// Reconstruct the answer based on that value

var addTwoNumbers = function(l1, l2) {
    let num1 = '';
    let num2 = '';
    let curr1 = l1;
    let curr2 = l2;
    while (curr1) {
        num1 += curr1.val;
        curr1 = curr1.next;
    }
    while (curr2) {
        num2 += curr2.val;
        curr2 = curr2.next;
    }
    num1 = num1.split('').reverse().join('');
    num2 = num2.split('').reverse().join('');
    let total = (Number(num1) + Number(num2)).toString().split('').reverse().join('');
    let result = new ListNode();
    let current = result;
    for (let i = 0; i < total.length; i++) {
        let temp = new ListNode(Number(total.charAt(i)));
        current.next = temp;
        current = current.next;
    }
    return result.next;
};


// Improved solution, iterative
var addTwoNumbers = function(l1, l2) {
	let result = new ListNode();
	let current = result;
	let curr1 = l1;
	let curr2 = l2;
	
	let carryVal = 0;
	while (curr1 || curr2) {
			let a = curr1 ? curr1.val : 0;
			let b = curr2 ? curr2.val : 0;
			let temp = a + b + carryVal;
			let currVal = temp % 10;
			current.next = new ListNode(currVal);
			if (temp >= 10) {
					carryVal = (temp - currVal) / 10;
					// another simpler way to calcualte carry over value is just carryVal = (temp >= 10) ? 1 : 0
			} else {
					carryVal = 0;
			}
			curr1 = curr1 ? curr1.next : null;
			curr2 = curr2 ? curr2.next : null;
			current = current.next;
	}
	
	if (carryVal) {
			current.next = new ListNode(carryVal);
	}
	
	return result.next;
};
