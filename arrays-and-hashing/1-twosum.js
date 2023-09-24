/**
 * https://leetcode.com/problems/two-sum/
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */


// class HashSetWithCopies {
//     copyKeySufix = '@cp'
//     data = {}
//     constructor(copyKeySufix = '@cp') {
//         this.copyKeySufix = copyKeySufix
//     }
//     add(key, val) {
//         if (this.data[key]) {
//             key += this.copyKeySufix
//         }
//         this.data[key] = val
//     }
//     get(key, isCopy = false) {
//         if (isCopy) {
//             key += this.copyKeySufix
//         }
//         return this.data[key]
//     }
// }

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const hashSet = new HashSetWithCopies()
    
//     // init hashset
//     for (let key in nums) {
//         hashSet.add(nums[key], key)
//     }
//     // search for 
//     for (let key in nums) {
//         let searchVal = target - nums[key]
//         let matchKey = hashSet.get(searchVal, searchVal === nums[key])
//         if (matchKey) {
//             return [key, matchKey]
//         }
//     }
// };


const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp.hasOwnProperty(nums[i])){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};
