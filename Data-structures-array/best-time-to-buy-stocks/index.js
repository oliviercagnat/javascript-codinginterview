// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
// On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
// Find and return the maximum profit you can achieve.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 

// Constraints:

// 1 <= prices.length <= 3 * 104
// 0 <= prices[i] <= 104

var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 1; i < prices.length; i++) {
        // Add to the max profit total if the current price is greater than previous
        // We "sell" when the the opposite is true because we will not buy on days that dip.
        if (prices[i] > prices[i - 1])
            // Add the increse in price to our profit
            maxprofit += prices[i] - prices[i - 1];
    }
    return maxprofit;
};

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Solution 1
function maxProfit(prices) {
	let profit = 0;
	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			const currentProfit = prices[j] - prices[i];

			if (currentProfit > profit) {
				profit = currentProfit;
			}
		}
	}

	return profit;
}

// Solution 2

var maxProfit = function (prices) {
	let profit = 0;

	let stockToBuy = prices[0];

	for (let i = 1; i < prices.length; i++) {
		if (stockToBuy > prices[i]) {
			stockToBuy = prices[i];
		}

		const currentProfit = prices[i] - stockToBuy;

		if (currentProfit > profit) {
			profit = currentProfit;
		}
	}

	return profit;
};