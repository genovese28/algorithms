//Write a function called longestFall, which accepts an array of integers,
//and returns the length of the longest consecutive decrease of integers.

//console.log(longestFall([5, 3, 1, 3, 0])); // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
//console.log(longestFall([2, 2, 1])); // 2, 2-1 is the longest consecutive sequence of decreasing integers
//console.log(longestFall([2, 2, 2])); // 1, 2 is the longest consecutive sequence of decreasing integers
// longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
//console.log(longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1])); // 5, 9-8-7-6-5 is the longest
console.log(longestFall([])); //0

// i: array
// o: number
// constraints: 0(n) 0(n)
// edge cases: all the same

function longestFall(array) {
  //keep track of longest and current- replace longest w current if its longer
  //loop
  //keep adding to longest until find num that doesn't decrease
  //compare lom and curr, and start count again
  //return longest
  //window approach

  let long = 0;
  let curr = 0;

  if (array.length === 0) return 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      curr++;
    } else {
      long = Math.max(long, curr);
      curr = 0;
    }
  }
  return long + 1;
}
