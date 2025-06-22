// https://leetcode.com/problems/single-number/
// Trick - Use Bitwise XOR
// Working of XOR : a XOR a gives 0 and a XOR 0 gives a
// XOR gives 1 only if the bits are different, and 0 if they are the same.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0;
    for (let i =0; i< nums.length; i++){
        xor = xor ^ nums[i];
    }
    return xor;
};

// var singleNumber = function(nums) {
//     let numberMap = {};
//     for (let i =0; i< nums.length; i++){
//         if (numberMap[nums[i]]){
//             numberMap[nums[i]]++;
//         } else {
//             numberMap[nums[i]] = 1;
//         }
//     }
//     let result = 0;
//     Object.keys(numberMap).forEach((number) => {
//         if (numberMap[number] == 1){
//             result = Number(number);
//         }
//     })
//     return result;
// };