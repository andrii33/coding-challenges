/**
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  const count = {}
  let res = []
  let numsBucket = new Array(nums.length)
  for (let n of nums) {
      if (!count[n]) count[n] = 0
      count[n] += 1
  }
  for ([key, v] of Object.entries(count)) {
      if (!numsBucket[v]) numsBucket[v] = []
      numsBucket[v].push(key)
  }
  
  for (let i = nums.length; i > 0; i--) {
      while (numsBucket[i] && numsBucket[i].length > 0) {
          res.push(numsBucket[i].pop())
          k--
          if (k <= 0) return res
      }
  }
};
