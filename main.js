function add (x, y){
    return x + y
}
console.log(add(2, 4))

function multiply (a, b){
    for (let i = 0; i < b; i++){
        return a * b;
    }
}
console.log(multiply(4, 6))

function power (x, n){
    let coke = 1;
    for (let i = 0; i < n; i++){
    coke *= x;
    }
    return coke
}
console.log(power(2,8))