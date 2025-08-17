// https://leetcode.com/problems/palindrome-linked-list/description/

// better solution, find middle element and then reverse the second half of linked list
var isPalindrome = function(head) {
    // find the middle of the linked list
    let slow = fast = head;
    while (fast && fast.next){
        slow = slow.next;
        fast = fast.next.next; 
    }
    // reverse second half of the linked list
    let prev = null;
    let curr = slow;
    while(curr){
        let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
    }
    // check for palindrome
    let firstList = head;
    let secondList = prev;
    while (secondList){
        if (firstList.val !== secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};

// Unoptimised Solution - convert into array 
// var isPalindrome = function(head) {
//     let curr = head;
//     let arr = [];
//     while(curr){
//         arr.push(curr.val);
//         curr = curr.next;
//     }
//     for (let i =0; i<Math.floor(arr.length/2); i++){
//         if (arr[i] !== arr[arr.length-i-1]){
//             return false;
//         }
//     }
//     return true;
// };