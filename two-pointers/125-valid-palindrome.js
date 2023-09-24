/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const cleanS = s.toLowerCase().replace(/[^0-9a-z]/g, '')
  if (cleanS === "") return true
  let l = 0
  let r = cleanS.length - 1
  while (l < r) {{
      if (cleanS[l] !== cleanS[r]) {
          
          return false
      }
      l++
      r--
  }}
  
  return true
};