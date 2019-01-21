//find the first pair that equals the sum
//if none return undefined

function sumOfPairs(nums, sum) {
  //set
  //loop keep checkign set for difference
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    let inSet = sum - nums[i]; //difference we need

    if (seen.has(inSet)) return [inSet, nums[i]]; //found and return pair

    seen.add(nums[i]); //if not add to set
  }
  return undefined;
}
//console.log(sumOfPairs([1, 2, 3, 6, 4], 6));
console.log(sumOfPairs([6, 5, 2, 12], 14));
