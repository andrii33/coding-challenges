/**
 Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

 A subarray is a contiguous non-empty sequence of elements within an array.

 

 Example 1:

 Input: nums = [1,1,1], k = 2
 Output: 2
 Example 2:

 Input: nums = [1,2,3], k = 3
 Output: 2
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = (nums, k) => {
  const map = new Map([[0, 1]])
  let sum = 0
  let res = 0
  for (i = 0; i < nums.length; i++) {
      sum += nums[i]
      if (map.has(sum - k)) {
          res += map.get(sum - k)
      }
      val = map.get(sum) ?? 0
      map.set(sum, (val + 1)) 
  }

  return res
};
