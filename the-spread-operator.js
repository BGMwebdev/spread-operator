/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
// Both arrays stay the same
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("Second array:", arr2);
console.log("First array:", arr1)

// Copying an array
// with spread operator third array remains untouched while fourth array is changed
let arr3 = [4, 5, 6];
let arr4 = [ ...arr3];
arr4.push(7);
console.log("Third array:", arr3);
console.log("Fourth array:", arr4)

// Copying an object


// Copying only part of an array/object
