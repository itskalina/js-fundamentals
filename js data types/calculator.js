function calculator(num1, operation, num2){

    

    if (operation === '+'){
        let result = num1 + num2;
        console.log(result.toFixed(2));

    } else if(operation === '-'){
        let result = num1 - num2;
        console.log(result.toFixed(2));

    } else if(operation === '/'){
        let result = num1 / num2;
        console.log(result.toFixed(2));

    }else if(operation === '*'){
        let result = num1 * num2;
        console.log(result.toFixed(2));

    }
}

calculator(5, '+', 10);