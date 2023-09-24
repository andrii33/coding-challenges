/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var findMin = function(nums) {
//     nums = nums.sort((a, b) => a-b)
//     return nums[0]
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
  let l = 0
  let r = nums.length - 1
  let min = nums[0]
  while (l <= r) {
      let mid = Math.floor((l + r) / 2)
      if (min > nums[mid]) min = nums[mid]
      if (nums[l] <= nums[mid]) {
          if (nums[r] < nums[l]) {
              l = mid + 1
          } else {
              r = mid - 1
          }
      } else {
          if (nums[mid] < nums[r]) {
              r = mid - 1
          } else {
              l = mid + 1
          }
      }
  }

  return min
};
