let n = 5;

function sum(n){
    if (n==0) return 0;
    return n + sum(n-1);
}

// function sum(num, total){
//     if (num==0){
//         return total;
//     }
//     total += num;
//     num--;
//     return sum(num, total);
// }

console.log(sum(n));