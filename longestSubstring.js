// given the length find the longest substring w/o repeating characters
// Outputs: number(length)
// Inputs: string of characters
// Constraints: ?
// Edge cases:  empty string, all same characters, case senstive

// Examples:

console.log(longestSubstring('abcbdefgc')); //6, "cbdefg"
//console.log(longestSubstring('abbcde')); //4, "bcde"
//console.log(longestSubstring('pwwkew'));

function longestSubstring(string) {
  //make an object to count all characters
  //pointers, window, slow and fast pointer
  //if we have seen char then

  let seen = {};
  let start = 0;
  let longestLen = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (seen[char] === undefined) {
      seen[char] = i;
      longestLen = Math.max(longestLen, i - start + 1);
    } else {
      start = Math.max(seen[char] + 1, start);
      seen[char] = i;
    }
    return longestLen;
  }
}
