// Fibonacci sequence problem and its permutations

// This is a fibonacci sequence problem. This can be solved using both a recursion
// method, utilizes the description of what a fibonacci is, or using DP strategy.

// Fibonacci sequence using recursion. This is however not performant without using a
// memoize function.

var fibonacciRecursive = (num) => {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// We utilize a hash table for lookup here. If the value is already solved, we can
// instantly return that value rather than having to recalculate the output

var fibonacciMemoize = (num, memo = {}) => {

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacciMemoize(num - 1, memo) + fibonacciMemoize(num - 2, memo);
}

// Below is the DP stratey of solving fibonacci sequence. We initialize the list with
// [0, 1] respectively. Since the sequence will add onto this process, we can continuously
// expanding the array.

// DP recursive
var fibonacciDPRecursive = (n) => {
  if (n <= 0) return null;
  if (n === 1) return [0, 1];
  var list = fibonacciDPRecursive(n-1);
  if (list[n] !== undefined) return list[n];
  list[n] = list[n-1] + list[n-2];
  return list;
};

// DP iterative
var fibonacciDPIterative = (n) => {
  var res = [0, 1];
  for (var i=2; i<n; i++) {
    res[i] = res[i-1] + res[i-2];
  }
  return res;
}

// A permutation of this problem is n stair steppers.
// Problem 70:
// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Note: Given n will be a positive integer.

// This problem is similar to Fibonacci sequence. We need to initialize the starting
// array with [1,2] instead of [0,1].

var climbStairs = (n) => {
  if (n < 3) return n;
  var first = 1;
  var second = 2;
  var res = 0;
  for (var i=3; i<=n; i++) {
    res = first + second;
    first = second;
    second = res
  }
  return res;
};

var climbStairs = function(n) {
	let climbs = [1, 2]
	for (let i = 2; i < n; i++) {
			climbs[i] = climbs[i-1] + climbs[i-2];
	}
	return climbs[n - 1];
};
