// https://leetcode.com/problems/binary-search/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    for (let i = 0; i<nums.length; i++){
        let mid = Math.floor((start + end) / 2);
        if (nums[mid]==target){
            return mid;
        }
        else if (nums[mid] > target) {
            end = mid - 1;
        } 
        else if (nums[mid] < target){
            start = mid + 1;
        }
    }
    return -1;
};