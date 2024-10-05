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
