// https://leetcode.com/problems/jewels-and-stones/

var numJewelsInStones = function(jewels, stones) {
    let uniqueJewels = new Set(jewels);
    let count = 0;
    for (let i = 0; i<stones.length;i++){
        if (uniqueJewels.has(stones[i])){
            count++;
        }
    }
    return count;
};