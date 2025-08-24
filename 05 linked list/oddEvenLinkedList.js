// https://leetcode.com/problems/odd-even-linked-list/

// This problem is tricky, you need to group together nodes on odd and even "Indices" and not the values of the nodes itself
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even && even.next){
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};