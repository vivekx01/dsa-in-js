// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let size = 0;
    while(head){
        head = head.next;
        size++;
    }
    let prevPos = size - n;
    let prev = sentinel;
    for (let i = 0; i<prevPos; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};