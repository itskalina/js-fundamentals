function coffeeLover(array){


    // coffee list array at first
    let coffeeList = array.shift();
    let coffeeListArr = coffeeList.split(" ");

    // amount of commands a.k.a. elements left in the array
    let commandsN = array.shift();
    let commandsCount = Number(commandsN);

    for(let i = 0; i < commandsCount; i++){
        
        let currentCommand = array[i].split(' ');

        if(currentCommand[0] === 'Include'){
            coffeeListArr.push(currentCommand[1]);

        } else if (currentCommand[0] === 'Remove'){

            if(currentCommand[1] === 'first'){
                for (let k = 1; k <= currentCommand[2]; k++){
                    coffeeListArr.shift();
                }
            } else { 
                for (let k = 1; k <= currentCommand[2]; k++){
                    coffeeListArr.pop();
                }
            }

        } else if (currentCommand[0] === 'Prefer'){

            let index1 = currentCommand[1];
            let index2 = currentCommand[2];

            if (index1 < coffeeList.length && index2 < coffeeList.length){

                [coffeeListArr[index1], coffeeListArr[index2]] = [coffeeListArr[index2], coffeeListArr[index1]];
            }
        
        } else { 
            coffeeListArr.reverse();
        }
    }

    console.log('Coffees:');
    console.log(coffeeListArr.join(' '));

}
coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee", "5", "Include OrdinaryCoffee", "Remove first 1", "Prefer 0 1",
"Prefer 3 1", "Reverse"]); 