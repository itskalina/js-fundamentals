function print(start, end){

    let sum = 0;
    let allNums = '';

    for(i = start; i <= end; i++){
        allNums += i + ' ';
        sum += i;
        
    }
console.log(allNums);
console.log(`Sum: ${sum}`);
}

print(5, 10);
