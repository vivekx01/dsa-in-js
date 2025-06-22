// https://leetcode.com/problems/missing-number/
// sum range formula is below
// Sum = (n * (start + end)) / 2 or Sum = ((n * (n+1)) / 2)
// start = first term
// end = last term
// To find out n
// n = (end - start + 1)
// we cannot take end directly as our end because what if the range is something like 
// start = 3 , end = 7 : Here we have end as 7 but actual n here will be 5 
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    expected_sum = sumRange(0,nums.length);
    function sumRange(start, end) {
        return ((end - start + 1) * (start + end)) / 2;
    }
    actual_sum = nums.reduce((acc,num)=>acc+num,0);
    return expected_sum - actual_sum;
};