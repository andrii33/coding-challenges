/**
 * Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 
 Depth First Search DFS iterative
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  let level = 0
  const stack = [{node: root, depth: 1}]
  while (stack.length > 0) {
     const { node, depth } = stack.pop() || {}
     if (node) {
         level = Math.max(level, depth)
         stack.push({node: node.left, depth: depth + 1})
         stack.push({node: node.right, depth: depth + 1})
     }
  }
  
  return level
};


// BFS Breth First Search iterative
// var maxDepth = function(root) {
//     if (!root) return 0
  
//     let level = 0
//     const q = [root]
//     while (q.length > 0) {
//         for (let node of [...q]) {
//             q.shift()
//             if (node.left) q.push(node.left)
//             if (node.right) q.push(node.right)
//         }
//         level += 1
//     }
  
//     return level
// };

// Depth First Search DFS recursive
// var maxDepth = function(root) {
//     if (!root) return 0
  
//     let left = 1 + maxDepth(root.left)
//     let right = 1 + maxDepth(root.right)
  
//     return Math.max(left, right)
// };