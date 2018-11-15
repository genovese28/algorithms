//from Hack Reactor prep course

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

function getSmallestElementAtProperty(obj, key) {
  return Math.min(...obj[key].map(el => el));
  //     ||

  // let smallest = null;

  // for (let val in obj[key]) {
  //   if (obj[key][val] < smallest || smallest === null) {
  //     smallest = obj[key][val];
  //   }
  // }
  // return smallest;
}
