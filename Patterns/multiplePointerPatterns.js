//QUESTION-1

//Write a function called sumZero which accept a sorted array of integers.The function should find the first pair
//were the sum is zero.Return an array that includesboth values that sum to zero
//or undefined if a pair does not exist

//approach-1 (O(n^2))

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // nested loop
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); 
