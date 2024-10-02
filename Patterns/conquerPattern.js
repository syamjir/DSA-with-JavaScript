//QUESTION

//Given a sorted array of integers.Write a function called search that accept
// a value and returns the index where the value passed to the function is
//located.If the value is not found return -1

//approach-1 (O(n))

function search1(arr, n) {
  return arr.indexOf(n);
}

console.log(search1([1, 2, 3, 4, 5], 6));
