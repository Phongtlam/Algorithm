// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

var merge = function(intervals) {
    if (intervals.length === 0) return [];
    intervals = intervals.sort((a, b) => a.start - b.start);
    let start = intervals[0].start;
    let end = intervals[0].end;
    let result = [];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i].start > end) {
            result.push(new Interval(start, end));
            start = intervals[i].start;
        }
        if (intervals[i].end > end) {
            end = intervals[i].end;
        }
    }
    result.push(new Interval(start, end));
    return result;
};