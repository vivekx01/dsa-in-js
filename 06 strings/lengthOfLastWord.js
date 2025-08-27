// https://leetcode.com/problems/length-of-last-word/
// not recommended to use built in functions like trim and split in js

// first approach
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    while(n >= 0){
        if (s[n] == " "){
            n--;
        } else {
            break;
        }
    }
    let size = 0;
    while (n >= 0){
        if (s[n] !== " "){
            --n;
            size++;
        } else {
            break;
        }
    }
    return size;
};

// second approach - in a single loop
var lengthOfLastWord = function(s) {
    let n = s.length - 1;
    let count = 0;
    while (n>=0){
        if (s[n]!==" "){
            count++;
        } 
        else if (count > 0 && s[n]==" ") {
            break;
        }
        n--;
    }
    return count;
};