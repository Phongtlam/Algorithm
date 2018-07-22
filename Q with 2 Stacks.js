// Implement Q with 2 stacks

class Q {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	add(val) {
		this.stack1.push(val);
	}

	remove() {
		this.flipStacks(this.stack1, this.stack2);
		let remove = this.stack2.pop();
		this.flipStacks(this.stack2, this.stack1);
		return remove;
	}

	peek() {
		this.flipStacks(this.stack1, this.stack2);
		let peek = this.stack2[this.stack2.length - 1];
		this.flipStacks(this.stack2, this.stack1);
	}

	isEmpty() {
		return this.stack1.legnth === 0;
	}

	flipStacks(stack1, stack2) {
		while (stack1.length > 0) {
			let pop = stack1.pop();
			stack2.push(pop);
		}
	}
}