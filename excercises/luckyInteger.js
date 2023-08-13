/*
PROBLEM STATEMENT
=========================================================================================
Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

Return the largest lucky integer in the array. If there is no lucky integer return -1.
=======================================================================================
*/

/* Pseudo code
    -function should accept an array as argument
    -Argument name is arr
    -lucky integer is an integer that appears equal times its value
    -the largest lucky integer should be returned 
    -If there is no lucky integer, return -1
    
    ------------------------------------------------------
    -function wiil be called findLuckyInteger
    -Create an empty object
    -Create a variable to track max value
    -Loop through the array as you assign each unique value a value
    -Loop again and search the integer that has max equal key - value
    -return its key or -1 if it's not found

*/

function findLuckyInteger(arr) {
  const luckyCounter = {};
  let maxValue = 0;

  for (let val of arr) {
    luckyCounter[val] = (luckyCounter[val] || 0) + 1;
  }

  for (let key in luckyCounter) {
    if (luckyCounter[key] === parseInt(key)) {
      maxValue = parseInt(key);
    }
  }

  if (maxValue > 0) {
    return maxValue;
  } else {
    return -1;
  }
}

console.log(findLuckyInteger([2, 2, 3, 4])); // 2
console.log(findLuckyInteger([1, 2, 2, 3, 3, 3])); // 3
console.log(findLuckyInteger([2, 2, 2, 3, 3])); // -1
