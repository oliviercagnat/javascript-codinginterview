// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing 
// each of them is that adjacent houses have security systems connected and it will automatically 
// contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, 
// return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]

    // Keep track of the max money we can make with x amount of houses available
    // dp[0] = max amount if we only have the first house to rob
    // dp[1] = max amount if we only have the first 2 houses to rob
    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        // Compare current max with the previous max
        // Check if the money from the current house + max of 2 houses away is greater than the current max
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
    }
    return dp[nums.length - 1];
};

var rob = function (nums) {
    return helper([], 0, nums);
  };
  
  var helper = function (dp, i, nums) {
    if (i >= nums.length) return 0;
    if (dp[i] === undefined) {
      dp[i] = Math.max(
        helper(dp, i + 1, nums),
        nums[i] + helper(dp, i + 2, nums)
      );
    }
    return dp[i];
  };

  var rob = function (nums) {
    var len = nums.length;
    var dp = Array(len);
    for (var i = len - 1; i >= 0; i--) {
      dp[i] = Math.max(
        dp[i + 1] || 0,
        nums[i] + (dp[i + 2] || 0)
      );
    }
    return dp[0] || 0;
  };

  var rob = function (nums) {
    var len = nums.length;
    var dp = [0, 0];
    for (var i = len - 1; i >= 0; i--) {
      dp = [Math.max(dp[0], nums[i] + dp[1]), dp[0]];
    }
    return dp[0];
  };