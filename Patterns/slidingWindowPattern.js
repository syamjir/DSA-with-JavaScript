//QUESTION-1

//Write a function called maxSubArraySum which accept an array of integers and number called navigator. The function
//shoud calculate the maximum sum of n consecutive elements in that array

//approach-1 (O(n^2))

function maxSubArraySum1(arr, num) {
  // Edge case: if the number of elements (num) is greater than the length of the array, return null
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity; // Initialize the max sum to the lowest possible value (-Infinity)

  // Iterate over the array with a window of size 'num'
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0; // Temporary variable to store the sum of current subarray

    // Second loop to calculate the sum of the current subarray of size 'num'
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]; // Add the elements of the current subarray
    }

    // Update max if the current subarray sum is greater than the previously recorded max
    if (temp > max) {
      max = temp;
    }
  }

  return max; // Return the maximum sum found
}

// approach-2 (O(n))  Sliding window[slide sub array]

function maxSubArraySum2(arr, n) {
  if (arr.length < n) {
    return null; // If the array length is smaller than the subarray size
  }

  let tempSum = 0;
  let maxSum = 0;

  // Sum the first 'n' elements
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  // Sliding window: adjust the sum by subtracting the previous element and adding the new one
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]; // Slide the window
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

//QUESTION-2

//Write a function called minSubArrayLen which accepts two parameters -
//an array of positive integers and a positive integer.This function should
//return the minimal length of a contiguous subarray of which the sum is greater
//than or equal to the integer passed to the function. If there isn't one, return
// 0 instead.

//approach-1 (O(n))

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLength = Infinity;

  while (end < nums.length) {
    // Add the current element to the total
    total += nums[end];
    end++;

    // Shrink the window as small as possible while the sum is still >= sum
    while (total >= sum) {
      minLength = Math.min(minLength, end - start);
      total -= nums[start];
      start++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

//QUESTION-3

//Write a function called findLongestSubstring, which accepts a string and
//returns the length of the longest substring with all distinct characters.

//approach-1

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {}; // This is the object we use to keep track of characters and their latest index.
  let start = 0; // The starting point of our sliding window.

  // Loop through the string to examine each character.
  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Current character being checked.

    // If the character has been seen, and it's within the current substring (i.e., after start)
    if (seen[char]) {
      // Move the `start` pointer to the right of the last occurrence of the current character
      start = Math.max(start, seen[char]);
    }

    // Calculate the length of the current substring and update `longest` if it's the longest so far
    longest = Math.max(longest, i - start + 1);

    // Update the index of the current character in the `seen` object
    seen[char] = i + 1; // Store the next position of the character to avoid 0-index handling confusion
  }

  return longest;
}

//QUETION-4

//A string is good if there are no repeated characters.
//Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
//Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
//A substring is a contiguous sequence of characters in a string.

// approach-1 (O(n))

function countGoodSubstrings(s) {
  let count = 0;

  // Loop through the string using a sliding window
  for (let i = 0; i <= s.length - 3; i++) {
    // Grab the three characters in the current window
    let a = s[i],
      b = s[i + 1],
      c = s[i + 2];

    // Check if all three characters are unique
    if (a !== b && b !== c && a !== c) {
      count++;
    }
  }

  return count;
}

// Example usage:
console.log(countGoodSubstrings("xyzzaz")); // Output: 1
console.log(countGoodSubstrings("aababcabc")); // Output: 4

//QUETION-5

//You are given a digit string s that consists of digits from 0 to 9.
//A string is called semi-repetitive if there is at most one adjacent pair of the
//same digit. For example, "0010", "002020", "0123", "2002", and "54944" are
//semi-repetitive while the following are not: "00101022" (adjacent same digit
//pairs are 00 and 22), and "1101234883" (adjacent same digit pairs are 11 and 88).
//Return the length of the longest semi-repetitive substring of s.

//approach-1

function longestSemiRepetitiveSubstring(s) {
  let maxLength = 0;
  let start = 0; // Start of the current window
  let countRepeat = 0; // To track consecutive repeating characters

  for (let i = 1; i < s.length; i++) {
    // If current character is the same as previous one
    if (s[i] === s[i - 1]) {
      countRepeat++;
    }

    // If we have more than one consecutive repeating pair, adjust the window
    while (countRepeat > 1) {
      if (s[start] === s[start + 1]) {
        countRepeat--;
      }
      start++;
    }

    // Calculate the length of the current valid window
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

console.log(longestSemiRepetitiveSubstring("12234511345")); // Output: 5
