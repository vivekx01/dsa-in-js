let arr = [5,3,2,0,1];

function sum(arr){
    if (arr.length == 1) return arr[0];
    return arr[0] + sum(arr.slice(1));
}

console.log(sum(arr));