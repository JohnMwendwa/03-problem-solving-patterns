/*=============================================================================
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) //2
countUniqueValues([]) //0
countUniqueValues([-2,-1,-1,0,1]) //4
=============================================================================
 */

/* PSEUDO CODE SOULTION
    -function name will be counteUniqueValues
    -argument will be named arr
    -function should accept a sorted array
    -function should only count the unique values in the array and return the total count
    
    ----------------------------------
    -Return 0 if array is empty
    -Initialize a variable to track the unique values
    -Loop over the array from left side noting and adding the unique values to the variable
*/

// My solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = 0;
  let count = 0;
  while (right < arr.length) {
    right = left + 1;
    if (arr[left] === arr[right]) {
      left += 1;
    } else {
      left += 1;
      count += 1;
    }
  }
  return count;
}

// colt steele solution
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
