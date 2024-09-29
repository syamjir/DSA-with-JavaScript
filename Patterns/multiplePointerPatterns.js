//QUESTION-1

//Write a function called sumZero which accept a sorted array of integers.The function should find the first pair
//were the sum is zero.Return an array that includes both values that sum to zero
//or undefined if a pair does not exist

//approach-1 (O(n^2))

function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // nested loop
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]);

//approach-2 (O(n))

function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 5])); //This function uses the two-pointer technique.
//The array is assumed to be sorted. It uses two pointers (left and right), starting at the beginning and end of the array respectively.
//The two pointers move towards each other:
//If the sum of the two numbers is zero, the function returns that pair.
//If the sum is positive, the right pointer moves left (to decrease the sum).
//If the sum is negative, the left pointer moves right (to increase the sum).

//QUESTION-2

//Implement a function called countUniqueValues, which accepts a sorted array, and
//counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

// approach-1 (time complexity- O(n), space complexity- O(n))
const count = (arr) => {
  let obj = {}; // O(n)
  for (let el of arr) {
    // O(n)
    obj[el] = true; // Only care about existence, not count
  }
  return Object.keys(obj).length; // Number of unique values
};
console.log(count([1, 1, 1, 1, 2, 2, 3, 4, 5, 5]));

//approach-2 (space-O(1), time-O(n))

function countUniqueValues(arr) {
  // Handle edge case for empty array
  if (arr.length === 0) return 0;

  let pointer1 = 0; // Pointer for the unique position
  let pointer2 = 1; // Pointer to explore the array

  while (pointer2 < arr.length) {
    // If the current value at pointer1 is equal to pointer2
    if (arr[pointer1] === arr[pointer2]) {
      // Move pointer2 to the next element
      pointer2 += 1;
    } else {
      // We found a new unique value
      pointer1 += 1; // Move pointer1 to the next unique position
      arr[pointer1] = arr[pointer2]; // Update the value at pointer1
      pointer2 += 1; // Move pointer2 to the next element
    }
  }
  return pointer1 + 1; // Return the count of unique values
}

// Example usage
console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 3, 4, 5, 5])); // Output: 5
console.log(countUniqueValues([])); // Output: 0
console.log(countUniqueValues([1])); // Output: 1
console.log(countUniqueValues([1, 1, 1, 1])); // Output: 1
console.log(countUniqueValues([1, 2, 3, 4, 5])); // Output: 5
