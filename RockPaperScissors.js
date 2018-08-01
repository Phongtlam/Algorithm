/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

// The extreme naive solution here would be running three loops through the choices.
// However, what if the solution is asking for n games. How would we approach that?
// Surely it is impossible to output n loops. So a probable solution would be running a
// recursion with a strategy to keep track of the number of games via a counter variable.

var rockPaperScissors = () => {
  var choice = ['rock', 'paper', 'scissors'];
  var answer = [];

  for (var i = 0; i < choice.length; i++) {
    for (var j = 0; j < choice.length; j++) {
      for (var k = 0; k < choice.length; k++) {
        answer.push([choice[i], choice[j], choice[k]]);
      }
    }
  }
  return answer;
};

// The recursive solution utilizes a counter variable roundsLeft to determine the
// length of the subarrays. The recursive loops will continuously loop through
// the 3 choices (can be generalized into n number of choices). The 'gotcha' moment here
// is the concatenation of the oneRound subarrays for me. This is one of the times
// where concat has to be used over push to keep the growing subarray at a particular index.

var RPSDynamic = (n) => {
  var choice = ['rock', 'paper', 'scissors'];
  var roundsLeft = n;
  var res = [];

  function helper(oneRound, roundsLeft) {
    if (roundsLeft === 0) {
      res.push(oneRound);
      return;
      // this return statement is VERY important. You need to end the recursive loop
    }
    for (var i=0; i<choice.length; i++) {
      helper(oneRound.concat(choice[i]), roundsLeft-1);
    }
  }
  helper([], roundsLeft);
  return res;
}

// The more difficult version can be, rolling an n sided dice to match k sum for x number of rounds

function diceRoll(numRoll, sum, numSide) {
  const dice = generateDice(numSide);
  const result = [];

  function DFS(round, diceLeft) {
    if (diceLeft === 0) {
      if (reducer(round) === sum) {
        result.push(round);
      }
      return;
    }
    for (let i = 0; i < dice.length; i++) {
      DFS(round.concat(dice[i]), diceLeft - 1);
    }
  }

  DFS([], numRoll);
  return result;
}

function generateDice(n) {
  let dice = [];
  for (let i = 1; i <= n; i++) {
    dice.push(i);
  }
  return dice;
}

function reducer(array) {
  return array.reduce((sum, el) => {
    return sum += el;
  }, 0)
}

// truncated version to generate all possible combinations of dice rolls
function diceRoll(numRoll, roll = [], entry = []) {
  if (numRoll === 0) {
    entry.push(roll);
    return;
  }
  for (let i = 1; i <= 6; i++) {
    diceRoll(numRoll - 1, roll.concat(i), entry)
  }
  return entry
}

// Similar problems to these are subsets, permutations and combination sum
