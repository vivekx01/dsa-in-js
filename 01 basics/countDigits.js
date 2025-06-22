let num = 253;

function countDigits(n){
    if (n==0) return 1;
    if (n<0) n = Math.abs(n);
    let count = 0;
    while (n>0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}

console.log(countDigits(num));