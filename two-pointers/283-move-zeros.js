/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  Note that you must do this in-place without making a copy of the array.

  

  Example 1:

  Input: nums = [0,1,0,3,12]
  Output: [1,3,12,0,0]
  Example 2:

  Input: nums = [0]
  Output: [0]
  

  Constraints:

  1 <= nums.length <= 104
  -231 <= nums[i] <= 231 - 1

  1. (0, 1) nums[0,1,0,3,12]
  2. (1, 2) nums[1,0,0,3,12]
  3. (1, 3) nums[1,0,0,3,12]
  4. (2, 4) nums[1,3,0,0,12]
  5. (3, 5) nums[1,3,12,0,0]
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) => {
  let i = 0
  let j = 1
  while (j < nums.length) {
      if (nums[i] !== 0) {
          i++
          j++
          continue;
      }
      if (nums[j] !== 0 && nums[i] === 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]]
          i ++
          j ++
      } else {
          j++
      }
  }
};
