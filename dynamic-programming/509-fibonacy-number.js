/**
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).

 

Example 1:

Input: n = 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: n = 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 */

/**
 * @param {number} n
   0,1,1,2,3,5,8
 * @return {number}
 */
const fib1 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1
  let current = 1
  let prev1 = 1
  let prev2 = 0
  for (i = 2; i <= n; i++) {
      current = prev2 + prev1
      prev2 = prev1
      prev1 = current
  }
  return current
};

const fib2 = (n) => {
  if (n === 0) return 0
  if (n === 1) return 1

  return fib2(n-1) + fib2(n-2)
}
