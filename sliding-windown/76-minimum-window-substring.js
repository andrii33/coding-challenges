/**
 * Given two strings s and t of lengths m and n respectively, return the minimum window 
 * substring of s such that every character in t (including duplicates) is included in the window. 
 * If there is no such substring, return the empty string "".
 * The testcases will be generated such that the answer is unique.
 * 
 * Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
  const request = new Map()
  for (c of t) {
      const count = 1 + (request.get(c) ?? 0)
      request.set(c, count)
  }
  let rMatchCount = request.size // unique chars count
  let l = 0
  let r = 0
  let sMatchCount = 0 // count chars inside window with satisfied condition
  let sL = -1
  let sR = s.length + 1
  const search = new Map()
  while (r < s.length) {
      if (request.has(s[r])) {
          let sCount = search.get(s[r]) ?? 0
          search.set(s[r], ++sCount)
          if (request.get(s[r]) == sCount) sMatchCount++
      }
      r++
      while (sMatchCount === rMatchCount) {
          if (sR - sL > r - l) {
              sL = l
              sR = r
          }
          if (search.has(s[l])) {
              const sCount = search.get(s[l]) - 1
              search.set(s[l], sCount)
              if (request.get(s[l]) > sCount) sMatchCount--
          }
          l++
      }
  }
  if (sL >= 0) return s.substring(sL, sR)
  
  return ""
};
