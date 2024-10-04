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

//QUESTION-3

//Implement a function called, areThereDuplicates which accepts a variable
//number of arguments, and checks whether there are any duplicates among the arguments passed in.

//approach-1 (O(nlogn))

function areThereDuplicates(...args) {
  // Sorting the arguments
  args.sort((a, b) => a - b); // O(n log n) complexity due to sorting

  let start = 0;
  let next = 1;

  // Checking consecutive elements after sorting
  while (next < args.length) {
    // O(n) complexity due to the loop
    if (args[start] === args[next]) {
      return true; // Duplicate found
    }
    start++;
    next++;
  }
  return false; // No duplicates found
}

console.log(areThereDuplicates(1, 2, 3, 4, 2)); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false

//Time complexity

//Sorting: O(n log n)
//Checking duplicates: O(n)
//Overall: O(n log n)

//QUESTION-3

//Write a function called averagePair. Given a sorted array of integers and a
//target average, determine if there is a pair of values in the array where the
// average of the pair equals the target average. There may be more than one pair
// that matches the average target.

//approach-1 (O(n))

function averagePair(arr, avg) {
  // Calculate the sum that would result in the given average
  const avgSum = avg * 2;
  let left = 0;
  let right = arr.length - 1;

  // Loop through the array with two pointers
  while (left < right) {
    const sum = arr[left] + arr[right];

    // If the sum is greater, move the right pointer to reduce the sum
    if (sum > avgSum) {
      right--;
    }
    // If the sum is smaller, move the left pointer to increase the sum
    else if (sum < avgSum) {
      left++;
    }
    // If the sum matches the target average, return true
    else {
      return true;
    }
  }

  // No valid pair found, return false
  return false;
}

// Example test cases
console.log(averagePair([1, 2, 3], 2.5)); // true (2 + 3 = 5, avg = 2.5)
console.log(averagePair([1, 2, 3, 4, 5], 3.5)); // true (3 + 4 = 7, avg = 3.5)
console.log(averagePair([1, 3, 5, 7], 4)); // false
console.log(averagePair([], 4)); // false (empty array)

//Time Complexity:
// The time complexity of this algorithm is O(n) because the two pointers
// traverse the array at most once.

//QUESTION-4

//Write a function called isSubsequence which takes in two strings and checks
//whether the characters in the first string form a subsequence of the characters
// in the second string. In other words, the function should check whether the
//characters in the first string appear somewhere in the second string, without
// their order changing.

//approach-1

function isSubsequence(str1, str2) {
  let i = 0; // Pointer for str1 (subsequence)
  let j = 0; // Pointer for str2 (main string)

  // Loop through str2 to find the characters of str1
  while (j < str2.length) {
    // If characters match, move the pointer for str1
    if (str1[i] === str2[j]) {
      i++;
    }
    // Move the pointer for str2
    j++;

    // If we have matched all characters in str1, return true
    if (i === str1.length) {
      return true;
    }
  }

  // If we complete the loop and haven't matched all of str1, return false
  return false;
}

// Example test cases
console.log(isSubsequence("abc", "aebdc")); // true (characters "a", "b", and "c" appear in order)
console.log(isSubsequence("abc", "acb")); // false ("b" does not appear after "a" in order)
console.log(isSubsequence("hello", "heollwrld")); // false ("o" comes before "l" in the wrong order)
console.log(isSubsequence("sing", "sting")); // true (characters "s", "i", "n", and "g" appear in order)
console.log(isSubsequence("abc", "def")); // false (characters "a", "b", "c" do not exist in "def")
