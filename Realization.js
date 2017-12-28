// Interview with Realization
// Problem 1:
//
// There is a matrix of cells like a spreadsheet - let's call the JavaScript 2-dimensional array holding the data as allData. The matrix has n rows and m columns. Column numbers go from 1 to m, row numbers go from 1 to n.
//
// allData[i] gives the row at index i. A cell on row index i, col index j, can be accessed as allData[i][j].
//
// Column k is the 'Key' column containing strings. Rest of the columns cells can contain numbers or strings.
//
// 1.a:
//
// Write a function getSortedList that will take allData as a parameter and return a JSON that is an array of {keyValue: rowdata} objects sorted in alphabetical case-insensitive order of keys, where rowdata is an array of the row objects.
//
// 1.b:
//
// Write a function updateCell that will update the allData matrix as follows. Input is an array of {keyValue, colIndex, valueToSet} objects. Using the keyValue (to find the row) and the colIndex, you will update the cell in allData to ‘valueToSet’. Imagine that this input array can have a large number of entries.
//
// Note: You are allowed to create any intermediate objects/structures to make your code efficient in performance.Assume you have all the memory available.
//
// Problem 2: (not related to the above)
//
// There is a function updateDB (record, updateDBCallback). The function takes an input of a single ’record’ and calls updateDBCallback when the update is complete.
//
// You are writing a function updateManyRecords that gets an array of records to update using updateDB. When all the records in the array have been updated, you need to call 'callback'. Please complete the function.
//
//
// updateManyRecords (arrayOfRecords, callback) {
//
// .
//
// .
//
// .
//
// }

const getSortedList = (allData, k) => {
  if (allData.length === 0 || k === null) return "";

  let hash = {};
  for (let i=0; i<allData.length; i++) {
    hash[allData[i][k]] = allData[i]
  }
  let keys = []
  for (let prop in hash) {
    if (hash[prop]) {
      // sort out each array value
      hash[prop].sort();
      keys.push(prop);
    }
  }

  keys.sort();
  let final = [];
  for (let i=0; i<keys.length; i++) {
    let obj = {};
    let temp = keys[i];
    obj[temp] = hash[temp];
    final.push(obj);
  }
  return JSON.stringify(final);
}

const updateCell = (inputArr, allData, k) => {
  if (inputArr.length === 0 || allData.length === 0) return;
  let hash = {};
  // construct a hash table with all k as key and rows as values
  for (let i=0; i<allData.length; i++) {
    hash[allData[i][k]] = allData[i];
  }
  // change on the hash table
  for (let i=0; i<inputArr.length; i++) {
    let key = inputArr[i].keyValue;
    let col = inputArr[i].colIndex;
    let newVal = inputArr[i].valueToSet;
    hash[key][col] = newVal;
  }
  // update the allData array;
  for (let i=0; i<allData.length; i++) {
    allData[i] = hash[allData[i][k]];
  }
  return allData;
}

let allData = [
  ['c',4,5,6,'b',7],
  ['a',1,2,3,'z',4],
  ['e',4,3,2,'d',1],
  ['d',7,8,3,'c',2],
  ['b',2,3,4,'f',5],
  ['a',1,2,3,'h',4],
  ['a',1,2,3,'a',4],
]

let updateArr = [
  {keyValue: 'a', colIndex: 3, valueToSet: 'new'},
  {keyValue: 'z', colIndex: 5, valueToSet: 'new'},
  {keyValue: 'c', colIndex: 2, valueToSet: 'new'},
  {keyValue: 'a', colIndex: 1, valueToSet: 'new'},
  {keyValue: 'b', colIndex: 1, valueToSet: 'new'},
  {keyValue: 'f', colIndex: 3, valueToSet: 'new'},
]

console.log(getSortedList(allData, 4))
// console.log(updateCell(updateArr, allData, 4))

var updateDB = function(record, callback) {
  let rand = Math.floor(Math.random() * 1000)
  setTimeout(() => {
    callback(record)
  }, rand)
}

let arrayOfRecords = ['one', 'two', 'three', 'four'];

const updateManyRecords = (arrayOfRecords, callback) => {
  if (arrayOfRecords.length === 0) return;
  let count = 0;
  for (var i = 0; i < arrayOfRecords.length; i++) {
    (function(item, i) {
      updateDB(item, function(val) {
        console.log('val', val)
        count++;
        if (count === arrayOfRecords.length) {
          callback('DONE')
        }
      })
    })(arrayOfRecords[i], i)
  }
}

console.log(updateManyRecords(arrayOfRecords, console.log))
