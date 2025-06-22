let num = 1432;

var reverse = function(x) {
    let number = x;
    let rev = 0;
    x = Math.abs(x);
    while(x>0){
        let digit = x % 10;
        rev = rev * 10 + digit;
        x = Math.floor(x/10);
    } 
    let limit = Math.pow(2,31);
    // limit = 2**31
    if (rev < -limit || rev > limit) return 0;
    return number > 0 ? rev : -rev;
};

console.log(reverse(num));
