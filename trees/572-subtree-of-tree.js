/**
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

 

Example 1:


Input: root = [3,4,5,1,2], subRoot = [4,1,2]
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
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  if (!root || !subRoot) return false
  const stack = [root]
  while (stack.length > 0) {
      let node = stack.pop()
      if (node.val === subRoot.val && isTheSame(node, subRoot)) return true
      if (node.left) stack.push(node.left)
      if (node.right) stack.push(node.right)
  }
  
  return false
};

var isSubtree = function(root, subRoot) {
  if (!root || !subRoot) return false
  if (isTheSame(root, subRoot)) return true
  const leftRes = isSubtree(root.left, subRoot)
  const rightRes = isSubtree(root.right, subRoot)
  
  return leftRes || rightRes
};

var isTheSame = (p, q) => {
  if (!p && !q) return true
  if (!p || !q || p.val !== q.val) return false
  const leftRes = isTheSame(p.left, q.left)
  const rightRes = isTheSame(p.right, q.right)
  
  return leftRes && rightRes
}