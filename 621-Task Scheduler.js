// Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.
//
// However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.
//
// You need to return the least number of intervals the CPU will take to finish all the given tasks.
//
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.


// Find the most freq task(s)
// First assumption: result should be the sum of everything
// Caveat: if n > 0, we need to factor in. How will we do that?
// We use a queue. Essentially we will check as long as the queue has elements in it, it will keep going
// If we use an element inside taskCnt, we need to set a cooldown timer in the cooler hash

var leastInterval = function(tasks, n) {
    var taskCnt = {};
    for (var i=0; i<tasks.length; i++) {
      taskCnt[tasks[i]] = (!taskCnt[tasks[i]]) ? 1 : taskCnt[tasks[i]]+1;
    }
    var cooler = {};
    for (var prop in taskCnt) {
      cooler[prop] = 0;
    }
    var result = 0;

    while (Object.keys(taskCnt).length > 0) {
      var currTask = undefined;
      var maxCnt = 0;
      // find max Cnt per loop
      for (prop in taskCnt) {
        if (cooler[prop] === 0 && taskCnt[prop] > maxCnt) {
          maxCnt = taskCnt[prop];
          currTask = prop;
        }
      }
      if (currTask) {
        taskCnt[currTask]--;
        if (taskCnt[currTask] === 0) {
          // delete the key when there is nothing left
          delete taskCnt[currTask];
          delete cooler[currTask];
        } else {
          // we use the element, so we need to set the timer before we can use it again
          // set as n + 1 because we will decrease it right after
          cooler[currTask] = n + 1;
        }
      }
      for (prop in cooler) {
        if (cooler[prop] > 0) cooler[prop]--;
      }
      result++;
    }
    return result;
};
// console.log(leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2))
// console.log(leastInterval(["A","A","A","B","B","B"], 2)) //8
