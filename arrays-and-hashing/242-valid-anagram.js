/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram1 = (s, t) => {
  if (s.length !== t.length) return false
  
  return t.split('').sort().join('') === s.split('').sort().join('')
};

const isAnagram2 = (s, t) => {
  if (s.length !== t.length) return false
  const freqMap = {}
  for (i = 0; i < s.length; i++) {
      if (!freqMap[s[i]]) {
          freqMap[s[i]] = 0
      }
      freqMap[s[i]]++
  }
  
  for (i = 0; i < t.length; i++) {
      if (!freqMap[t[i]]) {
          return false
      } else {
          freqMap[t[i]]--
      }
  }

  return true
};
