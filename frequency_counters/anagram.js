// Given two strings, write a function to determine if the second string is an angram of the first.An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

/*
validAnagram("","") //true
validAnagram('aaz',"zza") //false
validAnagram("anagram","nagaram") //true
validAnagram("rat","car") //false
validAnagram("awesome","awesom") //false
validAnagram("qwerty","qeywrt") //true
*/

/*
    -There are 2 string args: str1, str2
    -Both strings should have equal number of characters
    -lowercase the strings
*/

// my solution
function validAnagram(str1, str2) {
  // should have same number of characters
  if (str1.length !== str2.length) return false;
  let counter1 = {};
  let counter2 = {};

  for (let val of str1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of str2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key]) {
      return false;
    }
  }

  return true;
}

// colt steele solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter = {};

  for (let val of str1) {
    counter[val] = (counter[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!counter[val]) {
      return false;
    } else {
      console.log(counter);
      counter[val] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagara"));
console.log(validAnagram("anagamr", "nagaram"));
