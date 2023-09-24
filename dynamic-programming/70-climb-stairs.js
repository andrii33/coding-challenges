/**
 * You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let one = 1
  let two = 1
  let c = n-1
  for (i = 0; i < c; i++) {
      let tmp = one
      one = one + two
      two = tmp
  }
  
  return one
};

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  const acc = []
  acc[0] = 1
  acc[1] = 1
  for (i = 2; i <= n; i++) {
      acc[i] = acc[i-2] + acc[i-1]
  }
  
  return acc[n]
};