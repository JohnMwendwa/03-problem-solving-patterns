/**
 * Implement a function called hasDuplicates which accepts
 * a variable number of integer arguments and returns
 * true if there are duplicates in the arguments.
 *
 * Should be solved in O(n) or better.
 *
 */

/* Pseudo code
    -function should be called hasDuplicates
    -function should accept n number of arguments
    -return boolean TRUE if duplicates are found and otherwise FALSE
    -should be have a Big O(N) or better
*/

function hasDuplicates(...args) {
  const counter = {};

  for (let val of args) {
    if (!counter[val]) {
      counter[val] = 1;
    } else {
      return true;
    }
  }

  return false;
}

console.log(hasDuplicates(1, 2, 3, 4, 5, 6));
console.log(hasDuplicates(-1, -2, -3, -4, 4, 5, 6));
console.log(hasDuplicates(1, 2, 3, 4, 5, 6, 6));
console.log(hasDuplicates(1, 1, 1, 2, 3, 4, 5, 6));
