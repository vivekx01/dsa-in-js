let n = 4;
let lastDigit = "1";
for (let i =0; i<n; i++){
    let row = "";
    for (let j=0; j<i+1; j++){
        row += lastDigit;
        lastDigit = lastDigit === "1" ? 0 : "1";
    }
    console.log(row);
}