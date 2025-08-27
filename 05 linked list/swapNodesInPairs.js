// https://leetcode.com/problems/swap-nodes-in-pairs/

// iterative approach
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let previous = new ListNode();
    previous.next = head;
    let dummy = previous;
    let current = head;
    let next = head.next;
    while (current && next){
        // swapping pairs, maintaining previous pointer is essential
        previous.next = current.next;
        current.next = next.next;
        next.next = current;

        // moving to the next pair
        previous = current;
        current = previous.next;
        next = current && current.next;
    }
    return dummy.next;
};

// recursive approach
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let l = head;
    let r = head.next;
    l.next = swapPairs(r.next);
    r.next = l;
    return r;
};