// If you have an array of stick lengths. At every iteration, you are asked to cut the sticks by the shortest
// stick length. Return an array of number of sticks cut at each iteration

// 1. Make a hash table with stick size counts
// 2. Loop through the hash table and cut the sticks/modify the keys
// 3. Do until the hash is empty

let sticks = [1, 2, 3, 2, 8, 20, 10, 4, 5, 9, 3, 3]

const stickCount = (array) => {
	let res = [];
	let hash = {}
	for (let i = 0; i < array.length; i++) {
		if (hash[array[i]] === undefined) {
			hash[array[i]] = 1;
		} else {
			hash[array[i]] += 1;
		}
	}
	let iCount = array.length;
	while (iCount >= 0) {
		res.push(iCount);
		let keys = Object.keys(hash);
		let min = keys[0];
		for (let i = 0; i < keys.length; i++) {
			min = Math.min(min, keys[i]);
		}
		let minCount = hash[min];
		iCount -= minCount;
		for (let i = 0; i < keys.length; i++) {
			let newKey = keys[i] - min;
      if (newKey > 0) {
			  hash[newKey] = hash[keys[i]];
      }
			delete hash[keys[i]];
		}
	}
	return res;
}

// improved solution
// 1. Sort the array 
// 2. When the min value changes, we calculate the left over and push into the array as the next iteration

const stickCount = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const result = [array.length];
  let min = sortedArray[0];
  let cutCounter = 0;
  let leftOver = array.length;
  for (let i = 0; i < sortedArray.length; i++) {
    if (min < sortedArray[i]) {
      min = sortedArray[i];
      leftOver -= cutCounter;
      result.push(leftOver);
      cutCounter = 0;
    }
    cutCounter++;
	}
  return result;
}