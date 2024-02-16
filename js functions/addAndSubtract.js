function addAndSubtract(first, second, last){

let currentSum = sum(first, second);
let finalResult = subtract(currentSum, last);

console.log(finalResult);

function sum(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

}

addAndSubtract(23, 6, 10);