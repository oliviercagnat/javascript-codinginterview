// Given an array, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 
// Solution 1
var rotate = function (arr, numberOfShifts) {
    let tmp = 0;
    const leng = arr.length;
    numberOfShifts = numberOfShifts % leng;
    for (let i = 0; i < numberOfShifts; i++) {
       tmp = arr.pop();
       arr.unshift(tmp);
    }
   return arr;
  };

// Solution 2
//   let rotate = function(arr, numberOfShifts) {
//     let deletedArray = arr.splice(arr.length-numberOfShifts);
//     for (let i=0; i < deletedArray.length; i++){
//         arr.splice(i,0,deletedArray[i]);
//     }
    
//     return arr;
// };