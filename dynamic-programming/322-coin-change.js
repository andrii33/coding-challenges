/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0

 */

const coinChange = function(coins, amount) {
    const path = new Array(amount+1).fill(amount +1)
    console.log(path)
    path[0] = 0
    for (let i = 1; i <= amount; i++) {
      console.log(`\n subAmount ${i}`)
      // divide on subtasks
      for (const coin of coins) {
        if (i - coin >= 0) {
          const potentialVal = 1 + path[i - coin]
          console.log(`coin ${coin}`)
          console.log(`potential path ${potentialVal}`)
          
          path[i] = Math.min(path[i], 1 + path[i - coin])
        }
      }
      console.log(`min path[i] ${path[i]}`)
    }

    return path[amount]
};

const coins = [1,2,5]
const amount = 11

console.log(coinChange(coins, amount))