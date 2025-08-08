let arr = [7, 4, 3, 5, 1, 2];

for (let i = 1; i < arr.length; i++) {
    let insertionIndex = i;
    for (let j = i - 1; j >= 0; j--) {
        if (arr[insertionIndex] < arr[j]) {
            let temp = arr[j];
            arr[j] = arr[insertionIndex];
            arr[insertionIndex] = temp;
            insertionIndex = j;
        }
    }
}

console.log(arr);
