/**
 * 
 * Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), 
 * return the next greater number for every element in nums.
 * The next greater number of a number x is the first greater number to its traversing-order next in the array, 
 * which means you could search circularly to find its next greater number. 
 * If it doesn't exist, return -1 for this number.
 * 
 * Example 1:

Input: nums = [1,2,3,4,3]
Output: [2,3,4,-1,4]

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
  const res = new Array(nums.length).fill(-1)
  const stack = []
  for(let i = 0; i < (nums.length * 2); i++) {
      let num = nums[i % nums.length]
      while(stack.length > 0 && nums[stack[stack.length -1]] < num) {
          res[stack.pop()] = num
      }
      if (i < nums.length) {
          stack.push(i)
      }
  }

  return res
};