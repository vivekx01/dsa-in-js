let arr = [4, 9, 1, 0, 2]
let target = 0

for (let i = 0; i<arr.length; i++){
    if (arr[i]==target){
        console.log("Found at index:", i);
        return;
    }
}
console.log("Not Found")