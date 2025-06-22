// https://leetcode.com/problems/reverse-string/
let s = ["h","e","l","l","o"]

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//     let arrayCopy = [...s];
//     let arrayIndex = 0;
//     for (let i = s.length-1; i>=0; i--){
//         s[i] = arrayCopy[arrayIndex];
//         arrayIndex++;
//     }
//     return s;
// };
var reverseString = function(s) {
    let n = s.length;
    for (let i=0; i < Math.floor(n / 2); i++){
        let tempIndex = n-(i+1);
        let tempValue = s[tempIndex];
        s[tempIndex] = s[i];
        s[i] = tempValue;  
    }
    return s;
};