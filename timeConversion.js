//From HackerRank

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// s: a string representing time in  hour format
// Input Format

// A single string  containing a time in -hour clock format (i.e.:  or ), where  and .

// Constraints

// All input times are valid
// Output Format

// Convert and print the given time in -hour format, where .

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45

function timeConversion(s) {
  //first maek into array so e can manioulate it
  //check if am or pm to start condiotning logic
  //if its am, only need to make 12 00, change nothing else
  //if PM need to add 12 to all exept 12(stays the same)
  //then we need to get rid of the am/pm

  let arr = s.slice(0, 8).split(':');

  //   if (s[8] === 'P') {
  //     if (arr[0] !== '12') {
  //       arr[0] = Number(arr[0]) + 12;
  //     } else {
  //       arr[0] = '12';
  //     }
  //   }
  //   if (s[8] === 'A') {
  //     if (arr[0] !== '12') {
  //       arr[0] = arr[0];
  //     } else {
  //       arr[0] = '00';
  //     }
  //   }
  //   return arr.join(':');
  // }

  // ||

  s[8] === 'P' && arr[0] !== '12'
    ? (arr[0] = Number(arr[0]) + 12)
    : (arr[0] = '12');
  s[8] === 'A' && arr[0] !== '12' ? arr[0] : (arr[0] = '00');

  return arr.join(':');
}
console.log(timeConversion('12:45:54PM'));
