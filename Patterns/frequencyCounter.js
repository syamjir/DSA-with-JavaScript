//Patterns =>

//this can often avoid need for nested loops or (O(n^2)) operation with arrays/strings

//QUESTION EXAMPLE =>

// Write a function called same,which accept two arrays.The function should return true
//if every value in the array has it's corresponding value squared in the second array
//.The frequency of the values must be same

// 1st aproach (O(n^2)) =>

function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    // for loop (O(n))
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same1([1, 2, 3, 2], [9, 1, 4, 4]); // Inside the for loop, using indexOf to check for an element in another array would take O(n^2) time,
// because for each iteration of the loop (O(n)), indexOf performs a linear search (O(n)) through the array.

// 2nd aproach (O(n)) =>

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]); // Here, we use 3 individual for loops, each of which runs in O(n) time.
// This results in a time complexity of O(3n), but the constant factor 3 is negligible,
// so the overall time complexity is considered O(n).
