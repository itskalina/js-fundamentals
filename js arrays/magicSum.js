function magicSum(array, num){

    let combinations = [];

    for (let i = 0; i < array.length; i++) {

        for (let k = i + 1; k < array.length; k++) {
            
            if (array[i] + array[k] === num) {
                combinations.push([array[i], array[k]]);
            }
        }
    }
    
    for (let row of combinations) {
        console.log(row.join(' '));
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);