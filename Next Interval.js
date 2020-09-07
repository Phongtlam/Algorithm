// Next Interval (hard) #
//   Given an array of intervals, find the next interval of each interval. In a list of intervals, for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.
//
// Write a function to return an array containing indices of the next interval of each input interval. If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.
//
//   Example 1:
//
// Input: Intervals [[2,3], [3,4], [5,6]]
// Output: [1, 2, -1]
// Explanation: The next interval of [2,3] is [3,4] having index ‘1’. Similarly, the next interval of [3,4] is [5,6] having index ‘2’. There is no next interval for [5,6] hence we have ‘-1’.
//
// Example 2:
//
// Input: Intervals [[3,4], [1,5], [4,6]]
// Output: [2, -1, -1]
// Explanation: The next interval of [3,4] is [4,6] which has index ‘2’. There is no next interval for [1,5] and [4,6].

function solve(intervals) {
  const startMax = new PQ((a, b) => a.start >= b.start);
  const endMax = new PQ((a, b) => a.end >= b.end);
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const data = {
      idx: i,
      start: interval[0],
      end: interval[1]
    };
    startMax.push(data);
    endMax.push(data);
  }
  const res = new Array(intervals.length).fill(-1);

  while (endMax.size) {
    const { idx, start, end } = endMax.pop();
    let startPop;
    while (end <= startMax.peek().start) {
      startPop = startMax.pop();
    }
    if (startPop) {
      res[idx] = startPop.idx;
      startMax.push(startPop);
    }
  }
  return res;
}