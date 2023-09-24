/**
 * Given an unsorted array of integers nums, 
 * return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * 
 * Example 1:
 * Input: nums = [100,4,200,1,3,2]
 * Output: 4
 * Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
  const set = new Set(nums)
  let maxSeqLength = 0
  for (let n of nums) {
      if (set.has(n-1)) continue
      let tmpSeqLength = 1
      while(set.has(n + tmpSeqLength)) {
          tmpSeqLength++
      }
      if (tmpSeqLength > maxSeqLength) maxSeqLength = tmpSeqLength 
  }
  
  return maxSeqLength
};
