// given the length find the longest substring w/o repeating characters
// Outputs: number(length)
// Inputs: string of characters
// Constraints: ?
// Edge cases:  empty string, all same characters, case senstive

// Examples:

console.log(longestSubstring('abcbdefgc')); //6, "cbdefg"
//console.log(longestSubstring('abbcde')); //4, "bcde"
//console.log(longestSubstring('pwwkew')); //3 "wke"
//console.log(longestSubstring('tmmzuxt'));//5 "mzuxt"

function longestSubstring(string) {
  //make an object to count all characters
  //pointers, window,
  //if we have seen char then change the window and keep track of the lngest
  let seen = {};
  let start = 0;
  let longest = 0;

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (seen[char] !== undefined) {
      start = Math.max(seen[char] + 1, start);
    }
    seen[char] = i;
    longest = Math.max(i - start + 1, longest);
  }
  return longest;
}
