/**
 Give the root of the binary tree, return the values of the right most node at each level of the tree from top to bottom.

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

A useful test case for this problem would be:
Input: root = [1,2,3,null,5,6,null,4]
The output would be: [1,3,6,4]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
  const res = []
  if (!root) return res
  const q = [root]
  while (q.length > 0) {
      const levelLength = q.length
      for (i = 1; i <= levelLength; i++) {
          const current = q.shift()
          if (current.left) q.push(current.left)
          if (current.right) q.push(current.right)
          if (i === levelLength) {
              res.push(current.val)
          }
      }
      
  }
  
  return res
};
