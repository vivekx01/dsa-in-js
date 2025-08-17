// https://leetcode.com/problems/remove-linked-list-elements/

// There is an edge case in this problem where if the head.val == val to be removed
// To handle this case we add an extra node at the head which called a sentinel node

var removeElements = function (head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }

    }
    return sentinel.next;

};