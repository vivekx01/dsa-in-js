let arr = [5,4,3,2,1];

let mergeSort = (arr) => {
    if (arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(nums1, nums2){
    let m = nums1.length;
    let n = nums2.length;
    let p1 = m -1;
    let p2 =n -1;
    for (let i = m+n-1; i>=0; i--){
        if (p2 < 0){
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]){
            nums1[i] = nums1[p1];
            p1--;
        }
        else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
}

console.log(mergeSort(arr));
