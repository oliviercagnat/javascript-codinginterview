// Solution 1

// var moveZeroes = function(nums) {
//     let zeros = 0
//   for (let i = 0; i < nums.length; i++) {
//    let isZero = nums[i] === 0
//      if (isZero){
//         zeros++
//         nums.splice(i, 1)
//         i--
//       }
//     }
//   for (let i = 0; i < zeros; i++){
//       nums.push(0)
//   }
//  return nums
// };

// Solution 2

var moveZeroes = function(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
    }
  return nums
 };