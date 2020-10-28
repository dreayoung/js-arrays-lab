// Question 1
function average(array) {
  return array.reduce((a,b) => a + b) / array.length;
}
console.log(average([11, 12, 13]));
console.log(average([15, 16, 17, 18, 19, 20])); 
console.log(average([101, 4, 78])); 
// Question 2
function combineArrays(array1, array2) {
  const total = array1.concat(array2);
  return total;
} 
  console.log(combineArrays(["Ann", true, 4], [1, "Reuben"])); 
  console.log(combineArrays([4, 5, 6], [1, 2, 3]));

// Question 3
function arrayPlusArray(arr1, arr2) {
 
} 
  console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); 
  console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6])); 
  console.log(arrayPlusArray([0, 0, 0], [4, 5, 6])); 
  console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));

// Question 4
function abbrevName() {
  //Write your code here
}

// Question 5
function makeTitle() {
  // Write your code here
}

// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
