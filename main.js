function add(x, y){
    return x + y
}
console.log(add(2, 4))

function multiply (a, b){
    let result = 0
    for (let i = 0; i < b; i++){
    result = add(a,result);
    }
    return result
}
console.log(multiply(4, 6))

function power (x, n){
    let coke = 1;
    for (let i = 0; i < n; i++){
    coke = multiply(x, coke);
    }
    return coke
}
console.log(power(2,8))

function factorial(f){
    let miami = f;
    for(let i = 1; i < f; i++){
        miami = multiply(i, miami);
    }
    return miami
}
console.log(factorial(5))