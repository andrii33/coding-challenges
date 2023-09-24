/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 */

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  if (s.length <= 0) return 0
  let subStrSet = new Set([s[0]])
  let l = 0
  let r = 1
  let maxL = 1
  while (r < s.length) {
      if (!subStrSet.has(s[r])) {
          subStrSet.add(s[r])
          if (subStrSet.size > maxL) maxL = subStrSet.size
          r++
      } else {
          let el
          do {
              el = s[l]
              subStrSet.delete(el)
              l++
          } while (el !== s[r])
      }
  }
  
  return maxL
};
