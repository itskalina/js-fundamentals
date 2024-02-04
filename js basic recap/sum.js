function sum(n){

    let currentNumber = 1;
    let sum = 0;
     
    for (let i = 0; i < n; i++) {
        console.log(currentNumber);
        sum += currentNumber;
        currentNumber += 2;
    }
     
    console.log(`Sum: ${sum}`);
         
    
    
}

sum(5);

