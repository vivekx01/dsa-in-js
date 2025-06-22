// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
var removeDuplicates = function(nums) {
    let x = 0;
    for (let i=0; i<nums.length; i++){
        if (nums[i] > nums[x]){
            x+=1;
            nums[x] = nums[i];
        }
    }
    return x+1;
    // let uniquenums = new Set(nums);
    // let result = Array.from(uniquenums);
    // for (let i=0;i<result.length; i++){
    //     nums[i] = result[i];
    // }
    // return result.length;
};

console.log(removeDuplicates([1,1,2]));
