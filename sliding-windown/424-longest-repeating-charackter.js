/**
 * You are given a string s and an integer k. 
 * You can choose any character of the string and change it to any other uppercase English character. 
 * You can perform this operation at most k times.
 * Return the length of the longest substring containing the same letter 
 * you can get after performing the above operations.
 * 
 * 
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  if (s.length <= 1) return s.length
  const charFreqMap = new Map()
  let res = 0
  const maxFreq = () => {
      let max = 0
      charFreqMap.forEach((v, k) => {if (v > max) max = v})
      
      return max
  }
  const addChar = (char) => {
      if (!char) return
      if (charFreqMap.has(char)) {
         let count = charFreqMap.get(char) + 1
         charFreqMap.set(char, count)
      } else {
         charFreqMap.set(char, 1)
      }
  }
  const removeChar = (char) => {
      if (charFreqMap.has(char) && charFreqMap.get(char) > 1) {
          let count = charFreqMap.get(char)
          charFreqMap.set(char, --count)
      } else {
          charFreqMap.delete(char)
      }
  }
  let l = 0
  let r = 1
  addChar(s[0])
  addChar(s[1])
 
  while (r < s.length) {
      let length = r - l + 1
      let validWindow = length - maxFreq() <= k
      if (validWindow) {
          if (length > res) res = length
          r++
          addChar(s[r])
      } else {
          removeChar(s[l])
          l++
      }
  }
   
  return res 
};
