/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 */

var sortChars = (str) => {
  return str.split('').sort().join('')
}

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function(strs) {
  const res = {}
  for (let s of strs) {
      let sum = sortChars(s)
      if (!res[sum]) {
          res[sum] = []
      }
      res[sum].push(s)
  }
  
  return Object.values(res)
};
