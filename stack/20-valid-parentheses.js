/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length < 2 || s.length % 2 !== 0) return false
  
  const brk = {
      '(': ')',
      '{': '}',
      '[': ']'
  }
  
  let openStack = []
  for (let i = 0; i < s.length; i++) {
      const isOpen = s[i] in brk
      if (isOpen) {
          openStack.push(s[i])
      } else {
          if (s[i] !== brk[openStack.pop()]) return false
      }
  }
  
  return openStack.length === 0
};
