/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (nums[0] === target) return 0
  if (nums.length < 2) return -1
  let startIdx = 0
  let endIdx = nums.length - 1
  while (startIdx < endIdx) {
      let midIdx = Math.floor(startIdx + endIdx)
      if (nums[midIdx] === target) return midIdx
      if (nums[midIdx] < target) {
          startIdx = midIdx + 1
      } else {
          endIdx = midIdx - 1
      }
  }
  return -1
};
