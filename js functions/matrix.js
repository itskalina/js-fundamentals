function matrix(number){

    result = [];

    for (let timesRow = 1; timesRow <= number; timesRow++){

    result.push(number);
    
    }

    for(let timesColumn = 1; timesColumn <= number; timesColumn++){

        console.log(result.join(' '));

    }

}

matrix(7);