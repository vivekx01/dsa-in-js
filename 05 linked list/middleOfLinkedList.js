// https://leetcode.com/problems/middle-of-the-linked-list/


// Using Slow and Fast Pointer Approach
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast!=null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow;
};

// Using normal method
// var middleNode = function(head) {
//     let curr = head;
//     let size = 0;
//     while (curr.next !== null){
//         curr = curr.next;
//         size++;
//     }
//     curr = head;
//     let middleIndex = Math.ceil(size/2);
//     for (let i =0; i<middleIndex; i++){
//         curr = curr.next;
//         head = curr;
//     }
//     return head;
// };