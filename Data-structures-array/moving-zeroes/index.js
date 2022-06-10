// Given an integer array nums, move all 0's to the end of it while maintaining 
// the relative order of the non-zero elements.

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

// Solution 3

function pushZerosToEnd(arr, n)
{
    let count = 0; // Count of non-zero elements
 
    // Traverse the array. If element encountered is non-
    // zero, then replace the element at index 'count'
    // with this element
    for (let i = 0; i < n; i++)
        if (arr[i] != 0)
            arr[count++] = arr[i]; // here count is
                                // incremented
 
    // Now all non-zero elements have been shifted to
    // front and 'count' is set as index of first 0.
    // Make all elements 0 from count to end.
    while (count < n)
        arr[count++] = 0;
}
 
// Driver code
    let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
    let n = arr.length;
    pushZerosToEnd(arr, n);
    document.write("Array after pushing all zeros to end of array :<br>");
    for (let i = 0; i < n; i++)
        document.write(arr[i] + " "); 