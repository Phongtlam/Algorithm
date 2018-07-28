// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2
// Example 2:

// Input: [[7,10],[2,4]]
// Output: 1

var minMeetingRooms = function(intervals) {
    let counter = 0;
    let start = [];
    let end = [];
    let endRunner = 0;
    for (let i = 0; i < intervals.length; i++) {
        start.push(intervals[i].start);
        end.push(intervals[i].end);
    }
		
		// sort the start and end time
    start = start.sort((a, b) => a - b);
    end = end.sort((a, b) => a - b);
    
    for (let i = 0; i < intervals.length; i++) {
				// check if there is an open room in the end time Q
        if (start[i] < end[endRunner]) {
						// check if there is any current open room
            if (start[i] < end[i]) {
							// yep we need to book another room
                counter++;
            }
        } else {
						// increase the counter for endQ
            endRunner++;
        }
    }
    
    return counter;
 };