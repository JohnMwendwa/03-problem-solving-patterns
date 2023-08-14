// Write a function called same, which accepts two arrays.The function should return true if every value in the array has its corresponding value squared in the second array.The frequency of values must be the same.

/*Pseudo code Solution
    - function should only accept 2 arrays
    - both arrays length must be equal 
    - function should return a boolean
    - value in second array are squares of the first
    - variables used will be arr1, array2
*/

// My first solution
function same(arr1, arr2) {
  // check if both arguments are valid arrays
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  } else if (arr1.length !== arr2.length) {
    return false;
  }

  //   square the values in arr1
  const array1Sorted = arr1.map((v) => v * v).sort();
  const array2Sorted = arr2.sort();
  return array1Sorted.toString() === array2Sorted.toString();
}

// Colt steele naive solution - O(N^2)
function same(arr1, arr2) {
  // check if both arrays have same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    console.log(correctIndex);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// colt steele final refactored solution - O(N)
function same(arr1, arr2) {
  // check if both arrays have same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    // check if a key is missing in any of the 2 arrays
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    // check if the values of keys are equal in both arrays
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const value1 = [3, 2, 1, 1];
const value2 = [4, 1, 9, 1];
console.log(same(value1, value2));
