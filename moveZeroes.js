// Given an array of numbers containing
// zeroes, move all of the zeroes to the end of the array while maintaining
// the original order of the other elements

/*Ouputs: array?
Input: array of numbers(write sown and ask)
Constrants(limits input/output time or space): in place bonus
Edge cases: all zeros, no zeros, empty*/

//console.log(moveZeroes([0, 0, 1, 2, 0])); //output[1,2,0,0,0]
//console.log(moveZeroes([0, 1, 2, 0])); //output[1,2,0,0]
//console.log(moveZeroes([1, 3, 0, 0, 5])); //output[1,3,5,0,0]

//pointers - slow and fast- find nonZero swap, move both pointers, only move fast
//pointer when at a 0(this way you ar at correct index to swap w slow pointer)

//time: 0(n)
//space: 0(1)
function moveZeroes(array) {
  let curr = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      [array[curr], array[i]] = [array[i], array[curr]];
      curr++;
    }
  }
  return array;
}
