// Stack sorting (tower of Hanoi)

function sortStack(stack) {
  let result = [];
  while (stack.length > 0) {
		// we keep popping the primary stack until empty
		let pop = stack.pop();
		// in the case of sorting in ascending order, change to
		// while (result.length > 0 && result[result.length - 1] > pop)

		// While the result is not empty, and the top stack value in the result is greater than the pop value
    while (result.length > 0 && result[result.length - 1] < pop) {
			// we pop the result and push back into the original stack
      let resultPop = result.pop();
      stack.push(resultPop);
		}
		// repeatedly push the correct order into the result
    result.push(pop);
  }
  return result;
}

console.log(sortStack([10, 9, 2, 15, 3, 2, 1, 0]))