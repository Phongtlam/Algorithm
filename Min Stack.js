class MinStack {
	constructor() {
		this.data = [];
		this.minStack = [];
		this.min = Number.POSITIVE_INFINITY;
	}

	push(value) {
		this.data.push(value);
		if (this.minStack.length === 0) {
			this.minStack.push(value);
		} else {
			if (this.minStack[this.minStack.length - 1] >= value) {
				this.minStack.push(value);
			}
		}
	}
	
	pop() {
		let popValue = this.data.pop();
		if (this.minStack[ this.minStack.length - 1 ] === popValue) {
			this.minStack.pop();
		}
		return popValue;
	}

	getMin() {
		return this.minStack[this.minStack.length - 1];
	}
}
