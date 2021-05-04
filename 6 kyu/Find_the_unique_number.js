// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    newArr = []
    arr.forEach((e) => {
      if (arr.indexOf(e) === arr.lastIndexOf(e)){
        newArr.push(e)
      }
    })
    return newArr[0]
  }

// other solutions
// function findUniq(arr) {
//     return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
//   }
  