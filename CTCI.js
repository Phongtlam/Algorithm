// string
const checkUnique = (string) => {
	const obj = {}
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (obj[char] !== undefined) {
			return false;
		} else {
			obj[char] = true;
		}
	}
	return true;
}

const oneAway = (str1, str2) => {
	if (str1 === str2) return true;
	let hash = {}
	for (let i = 0; i < str1.length; i++) {
		if (hash[str1.charAt(i)] === undefined) {
			hash[str1.charAt(i)] = 1;
		} else {
			hash[str1.charAt(i)] += 1;
		}
	}
	let counter = 1;
	for (let i = 0; i < str2.length; i++) {
		if (hash[str2.charAt(i)] === undefined || hash[str2.charAt(i)] === 0) {
			if (counter === 0) {
				return false;
			} else {
				counter--;
			}
		} else {
			hash[str2.charAt(i)] -= 1;
		}
	}
	return true;
}

const zeroMatrix = (matrix) => {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			let idxVal = matrix[i][j];
			if (idxVal === 0) {
				matrix[i] = new Array(matrix[i].length).fill(0);
				for (let k = 0; k < matrix.length; k++) {
					matrix[k][j] = 0;
				}
				return matrix;
			}
		}
	}
}

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.head = null;
	}
	appendNode(data) {
		const newNode = new Node(data);
		if (this.head === null) {
			this.head = newNode;
			return;
		}
		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		curr.next = newNode;
	}

	removeNode(data) {
		let curr = this.head;
		if (this.head.data === data) {
			this.head = this.head.next;
		}
		while (curr.next) {
			if (curr.next.data === data) {
				curr.next = curr.next.next;
				return;
			}
			curr = curr.next;
		}
	}
}

const removeDup = (list) => {
	let map = new Map();
	let current = list.head;
	let prev = null;
	while (current) {
		if (map.get(current.data) === undefined) {
			map.set(current.data, 1)
		  prev = current;
		} else {
			prev.next = current.next
		}
		current = prev.next;
	}
	return list.head;
}




