// https://leetcode.com/problems/remove-element/
const nums = [3,2,2,3];

var removeElement = function(nums, val) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};

console.log(removeElement(nums));