// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// one pass approach
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let p2 = sentinel;
    let p1 = sentinel;
    for (let i = 0; i<n;i++){
        p1 = p1.next;
    }
    while (p1.next){
        p2 = p2.next;
        p1 = p1.next;
    }
    p2.next = p2.next.next;
    return sentinel.next;
};

// two pass approach
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