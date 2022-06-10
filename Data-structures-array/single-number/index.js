// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// https://www.geeksforgeeks.org/find-element-appears-array-every-element-appears-twice/

var singleNumber = function(nums) {

    if (nums.length===1) {
        return nums[0]
    }

    let result = 0;

    nums.forEach(element => {
        result = result ^ element
    });

    return result;

 };