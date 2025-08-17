// https://leetcode.com/problems/linked-list-cycle/description/
// Floyd's algorithm says that whenever a fast and a slow pointer run in a cycle, they meet at some point definitely

var hasCycle = function(head) {
    if (!head){
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow != fast){
        if (fast == null || fast.next == null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};