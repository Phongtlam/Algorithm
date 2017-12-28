// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.

// Trick here is to always keep track of the min
// We do that my comparing whenever a new value is pushed in, check against the min
// if min >= x value, we need to push the min in right before the x
// when we pop, we need to check if the pop value is the min, if it is we need to pop again
// to reset the stack to the right order and reassign min value

var MinStack = function() {
    this.stack = [];
    this.min = Number.POSITIVE_INFINITY;
};

MinStack.prototype.push = function(x) {
    if (x <= this.min) {
        this.stack.push(this.min);
        this.min = x;
    }
    this.stack.push(x);
};

MinStack.prototype.pop = function() {
    var pop = this.stack.pop();
    if (pop === this.min) {
        this.min = this.stack.pop();
    }
    return pop;
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

MinStack.prototype.getMin = function() {
    return this.min;
};
