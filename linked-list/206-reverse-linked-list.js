/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  if (!head || !head.next) return head
  let current = head.next // 2 -> 3
  let oldNext = current.next // 3 -> 4
  current.next = new ListNode(head.val, undefined) // 2 -> 1 -> null

  while (oldNext !== null) {
      let oldPrev = current // 2 -> 1 // null
      current = oldNext // 3 -> 4
      oldNext = current.next // 4 -> 5
      current.next = oldPrev // 3 -> 2 ...
  }
  
  return current
};