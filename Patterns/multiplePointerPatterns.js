//QUESTION-1

//Write a function called sumZero which accept a sorted array of integers.The function should find the first pair
//were the sum is zero.Return an array that includesboth values that sum to zero
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
