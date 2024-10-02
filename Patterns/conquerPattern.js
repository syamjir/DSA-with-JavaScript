//QUESTION

//Given a sorted array of integers.Write a function called search that accept
// a value and returns the index where the value passed to the function is
//located.If the value is not found return -1

//approach-1 (O(n))

function search1(arr, n) {
  return arr.indexOf(n);
}

console.log(search1([1, 2, 3, 4, 5], 3)); //ouput: 2

//approach-2 (log(n))

function search(arr, n) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] < n) {
      min = middle + 1;
    } else if (arr[middle] > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1; // Return -1 if n is not found
}

console.log(search([1, 2, 3, 4, 7, 8, 9, 10], 11)); // Output: -1
