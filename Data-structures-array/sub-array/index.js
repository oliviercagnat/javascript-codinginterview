// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:
// Input: nums = [1]
// Output: 1

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23

const maxSubArray = (nums) => {
    // initiate two variable, maxSum for total max, sum for current max
    let maxSum = -Infinity;
    let currentSum = 0;
    // iterate through the nums, store sub-problems result
    for(let i = 0; i < nums.length; i++){ 
        //cumulating answers to the top
        
        //compare currentSum add current number 
        //with current number and store the maximum value
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        
        //compare maxSum with currentSum and store the greater value
        maxSum = Math.max(currentSum, maxSum);
        
    }
    return maxSum;
}

nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));
nums = [1];
console.log(maxSubArray(nums));
nums = [5,4,-1,7,8];
console.log(maxSubArray(nums));