// https://leetcode.com/problems/split-a-string-in-balanced-strings/

// better approach
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let temp = 0;
    let balancedCount = 0;
    for (let i=0; i<s.length; i++){
        if (s[i]=="L"){
            temp++;
        }
        else {
            temp--;
        }
        if (temp == 0){
            balancedCount++;
        }
    }
    return balancedCount;
};

// simple approach
var balancedStringSplit = function(s) {
    let Lcount = 0;
    let Rcount = 0;
    let balancedCount = 0;
    for (let i=0; i<s.length; i++){
        if (s[i]=="L"){
            Lcount++;
        }
        else {
            Rcount++;
        }
        if (Lcount == Rcount){
            balancedCount++;
            Lcount = 0;
            Rcount = 0;
        }
    }
    return balancedCount;
};