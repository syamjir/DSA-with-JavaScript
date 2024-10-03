//Patterns =>

//this can often avoid need for nested loops or (O(n^2)) operation with arrays/strings

//QUESTION EXAMPLE =>

// Write a function called same,which accept two arrays.The function should return true
//if every value in the array has it's corresponding value squared in the second array
//.The frequency of the values must be same

// 1st approach (O(n^2)) =>

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

// 2nd approach (O(n)) =>

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

// EXAMPLE-2

//Given two strings, write a function to determine if the second string is an anagram
//of the first. An anagram is a word, phrase, or name formed by rearranging the letters
// of another, such as cinema, formed from iceman.

//approach-1

function validAnagram1(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    obj1[char] = (obj1[char] || 0) + 1;
  }
  for (let char of str2) {
    obj2[char] = (obj2[char] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram1(["apple"], ["elapp"])); // We use 3 for loops, each of which takes O(n) time.
// The total time complexity is O(3n), but since constants are ignored in Big O notation,
// this simplifies to O(n).

//approach-2

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram2("anagrams", "nagaramm"); //Only 2 for loops: One for creating a frequency map (lookup) and another for decrementing it based on the second string.
//Time complexity: Since there are two loops, both running in O(n), the total time complexity is O(n) rather than O(n^2).

//EXAMPLE-3

//Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

//approach-1 (O(n))

function sameFrequency(num11, num22) {
  const num1 = String(num11);
  const num2 = String(num22);
  if (num1.length !== num2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let num of num1) {
    obj1[num] = obj1[num] ? obj1[num] + 1 : 1;
  }
  for (let num of num2) {
    obj2[num] = (obj2[num] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}
