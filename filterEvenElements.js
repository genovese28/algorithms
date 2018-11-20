/*
HR
Write a function called "filterEvenElements".

Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.
*/
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

function filterEvenElements(arr) {
  //creates new array
  // return arr.filter(el => el % 2 === 0);

  //  || mutate the same array

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
