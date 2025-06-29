import { expect } from '../utils';

/**
 * LeetCode Problem: Best Time to Buy and Sell Stock
 * Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Level: Easy
 * Problem Statement:
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 *
 * Example 2:
 *
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 * @param prices
 *
 * Time Complexity: O(n), where n is the length of the prices array.
 * Space Complexity: O(1), as we are using a constant amount of space for variables.
 *
 * Hint: Keep track of the minimum price seen so far and calculate the profit at each step.
 */
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
}

// Tests:
expect(maxProfit([7, 1, 5, 3, 6, 4]), 5);
expect(maxProfit([7, 6, 4, 3, 1]), 0);
