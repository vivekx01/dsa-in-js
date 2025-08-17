// https://leetcode.com/problems/intersection-of-two-linked-lists/
// unoptimised approach - loop through linked lists while comparing each one to each one in O(n^2) time complexity

// optimised approach - use set to find the element
var getIntersectionNode = function(headA, headB) {
    let listB = new Set();
    while(headB){
        listB.add(headB);
        headB = headB.next;
    }
    while (headA){
        if (listB.has(headA)){
            return headA; 
        } else {
            headA = headA.next;
        }
    }
    return null;
    
};