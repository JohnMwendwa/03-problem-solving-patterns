/*=============================================================================
Write a function called sumZero which accepts a sorted array of integers.The function should find the first pair where the sum is 0. Return an array the includes both values that sum to zero or undefined if a pair does not exist.

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
=============================================================================
 */

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    //if sum is 0 stop the loop
    if (sum === 0) {
      return [arr[left], arr[right]];
      //subtract from the right if sum is greater than 0
    } else if (sum > 0) {
      right--;
      //subtract from the left if sum is less than 0
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
