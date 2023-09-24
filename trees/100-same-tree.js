/**
 * 100. Same Tree
Easy

6698

151

Add to List

Share
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

Example 1:


Input: p = [1,2,3], q = [1,2,3]
Output: true
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {
  if (!p && !q) return true
  if (!q || !p) return false
  if (p.val !== q.val) return false
  
  let leftRes = isSameTree(p.left, q.left)
  let rightRes = isSameTree(p.right, q.right)
  
  return leftRes && rightRes
};