/**
 * 
 * 
 * 
 * 
 Given a string s, return the longest palindromic substring in s.


Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
  let resStr = s[0]
  let resLen = 1
  for (let i = 0; i < s.length-1; i++) {
      // init pointers
      let l, r
      
      for (let j = i; j <= i+1; j++) {
          l = i
          r = j
          
          while(l >= 0 && r < s.length && s[l] === s[r]) {
              if (r - l + 1 > resLen) {
                  resLen = r - l + 1
                  resStr = s.substring(l, r+1)
              } 
              l--
              r++
          }
          
      }
  }
  
  return resStr
};