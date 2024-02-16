function simpleCalculator(first, second, operator){

    switch(operator){

        case 'multiply':
            let multiply = (a, b) => a * b;
            console.log(multiply(first, second));
            break;
        case 'divide':
            let divide = (a, b) => a / b;
            console.log(divide(first, second));
            break;
        case 'add':
            let add = (a, b) => a + b;
            console.log(add(first, second));
            break;
        case 'subtract':
            let subtract = (a, b) => a - b;
            console.log(subtract(first, second));
            break;
        }

}

simpleCalculator(8, 9, 'add');