/**
 Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 */

const generateParenthesis = (n) => {
  const res = []
  const maxStrLength = n * 2
  const dfs = (open, close, str) => {
      if (str.length === maxStrLength) {
          res.push(str)
          return
      }
      if (open < n) {
          dfs(open + 1, close, str + "(")
      } 
      if (close < open) {
          dfs(open, close + 1, str + ")")
      }
  }
  dfs(0, 0, '')

  return res
};

const generateParenthesis2 = (n) => {
  const res = []
  const q = [[0, 0, '']]
  const maxSLength = 2 * n
  while (q.length) {
    const [open, close, str] = q.pop()
    if (str.length === maxSLength) {
      res.push(str)
      continue
    }
    if (open < n) {
        q.push([open + 1, close, str + '('])
    }
    if (close < open) {
        q.push([open, close + 1, str + ')'])
    }
  }

  return res
}