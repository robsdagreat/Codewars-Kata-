// In this Kata, you have to write a function that will accept an array of numbers, in which you will need to check whether any combination of 3 numbers sum to 0.
// You are allowed to use a number more than once, as long as you use only 3 numbers total (e.g. 0+0+1 ).

// If a value of 0 is possible return true.
// Otherwise, if there is no possible combination of 3 numbers that sum to 0 return false.

//Answer:
function isMagicThree(array) {
  // Handle edge cases - check if array is valid
  if (!array || !Array.isArray(array) || array.length === 0) {
    return false;
  }
  
  // Check all possible combinations of 3 numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      for (let k = j; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === 0) {
          return true;
        }
      }
    }
  }
  
  return false;
}



console.log(isMagicThree([-10, 4, 5, 7, 3])); // true (-10 + 7 + 3 = 0)
console.log(isMagicThree([0])); // true (0 + 0 + 0 = 0)
console.log(isMagicThree([1, 4, 2, -9])); // false (no combination sums to 0)
console.log(isMagicThree([0, 0, 0])); // true (0 + 0 + 0 = 0)
console.log(isMagicThree([1, -1, 0, 2])); // true (1 + (-1) + 0 = 0)

// Additional test cases for edge cases
console.log(isMagicThree(null)); // false (null input)
console.log(isMagicThree(undefined)); // false (undefined input)
console.log(isMagicThree([])); 