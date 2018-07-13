// Given a list of daily temperatures, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

// Brute force way, we use 2 loops, simple
const tempCheck = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let isFill;
    for (let j = i; j < array.length; j++) {
      isFill = false;
      if (array[i] < array[j]) {
        result[i] = j - i;
        isFill = true;
        break;
      }
    }
    if (!isFill) result[i] = 0;
  }
  return result;
}

// Using a stack. 
// 1. If stack is empty, push the next value in
// 2. If stack is not empty, we need to check if current value > top stack value, if so, we know that is the answer, pop the stack and push into the aux array
// 		Keep going through the stack until it is empty || the current value < stack value, then we push in
// 3. Repeat til original array is done

const tempChkr = (temperatures) => {
  let result = new Array(temperatures.length).fill(0);
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    if (stack.length === 0) {
      stack.push([temperatures[i], i]);
    } else {
      while (stack.length > 0) {
        if (stack[stack.length - 1][0] < temperatures[i]) {
          let latest = stack.pop();
          result[latest[1]] = i - latest[1];
        } else {
          stack.push([temperatures[i], i]);
          break;
        }
      }
      stack.push([temperatures[i], i]);
    }
  }
  return result;
}