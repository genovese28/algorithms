//Write a function called twoArrayObject which accepts to arrays of varying lengths.
//The first array consists of keys and the second one consists of values. Your
//function should return an object created from the keys and values. If there are
//not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

/*Ouputs: object(k: v)
Input: 2 arrays(key, values) of values(write down and ask)
Constrants(limits input/output time or space): in place bonus
Edge cases: more key array use null; more value array ignore*/
// twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
// twoArrayObject(['a', 'b', 'c']  , [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}

function twoArrayObject(keys, vals) {
  let obj = '';
}

// function twoArrayObject(keys, val) {
//   let obj = {};

//   for (let i = 0; i < keys.length; i++) {
//     obj[keys[i]] = val[i];

//     if (obj[keys[i]] === undefined) {
//       obj[keys[i]] = null;
//     }
//   }
//   return obj;
// }
