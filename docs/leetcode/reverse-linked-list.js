/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur = head,
        prev = null;
    while (cur) {
        const curNode = cur.next;
        cur.next = prev;
        prev = cur;
        cur = curNode;
    }
    return prev;
};
