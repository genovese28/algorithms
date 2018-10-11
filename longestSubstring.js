// given the length find the longest substring w/o repeating characters
// Outputs: number(length)
// Inputs: string of characters
// Constraints: ?
// Edge cases:  empty string, all same characters, case senstive

// Examples:

console.log(longestSubstring('abcbdefgc')); //6, "cbdefg"
// longestSubstring("abbcde")//4, "bcde"

function longestSubstring(string) {
  //make an object to count all characters
  //pointers, window, slow and fast pointer
  //if we have seen char then

  let seen = {};
  let start = 0;
  let longestLen = 0;
  let currLen = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char] === undefined) {
      seen[char] = 1;
    } else {
      start++;
      currLen = i - start;
      longestLen = Math.max(longestLen, currLen);
    }
  }
  return longestLen;
}
