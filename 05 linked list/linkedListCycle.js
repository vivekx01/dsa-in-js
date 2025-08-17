// https://leetcode.com/problems/linked-list-cycle/description/

var hasCycle = function(head) {
    let curr = head;
    let uniqueElements = new Set();
    while (curr){
        if (uniqueElements.has(curr)){
            return true;
        } else {
            uniqueElements.add(curr);
        }
        curr = curr.next;
    }
    return false;
};