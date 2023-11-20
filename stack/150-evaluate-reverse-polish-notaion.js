/**
 150. Evaluate Reverse Polish Notation
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const operators = {
      '+': (x, y) => y + x,
      '-': (x, y) => y - x,
      '*': (x, y) => y * x,
      '/': (x, y) => y / x,
  }
  const stack = []
  for (let t of tokens) {
      if (Object.keys(operators).includes(t)) {
          let tmpRes = operators[t](stack.pop(), stack.pop())
          if (tmpRes > 0) 
              tmpRes = Math.floor(tmpRes)
          else
              tmpRes = Math.ceil(tmpRes)
          stack.push(tmpRes)
      } else {
          stack.push(parseInt(t))
      }
  }

  return stack.pop()
};
