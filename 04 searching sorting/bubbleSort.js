let array = [5,2,4,1];
let n = array.length;

for (let i=0; i<n-1; i++){
    let isSwapped = false;
    for (let j=0; j<(n-1)-i; j++){
        if (array[j]>array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
            isSwapped = true;
        }
    }
    if (!isSwapped){
        break;
    }

}

console.log(array);
