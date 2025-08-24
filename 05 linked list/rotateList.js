// https://leetcode.com/problems/rotate-list/

var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let curr = head;
    let size = 1;
    while (curr.next){
        size++;
        curr = curr.next;
    }
    let tail = curr;
    k = k % size;
    if (k === 0) return head;
    let rotationPoint = size - k;
    curr = head;
    for (let i = 1; i<rotationPoint; i++){
        curr = curr.next;
    }
    let newHead = curr.next;
    curr.next = null;
    tail.next = head;
    return newHead;
};