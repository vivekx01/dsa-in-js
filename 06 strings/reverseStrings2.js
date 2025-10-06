// https://leetcode.com/problems/reverse-string-ii/

var reverseStr = function(s, k) {
    s = s.split("")
    let n = s.length
    for (let x = 0; x < n; x = x + (2*k)){
        let mid = Math.floor(k/2);
        for (let i = 0; i < mid; i++){
            let temp = s[x+i]
            s[x+i] = s[x+k-i-1]
            s[x+k-i-1] = temp;
        }
    }
    return s.join("");
    
}; 

// first loop - jumping 2k steps
// second loop -  running till mid of each slice and reversing k elements
// Time complexity - O(n) not O(n^2) because we are jumping 2k steps
// Space complexity - O(n) because we are splitting the string to create and array
//                  - O(1) in case of languages where strings are mutable and we don't create an array