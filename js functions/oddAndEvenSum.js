function oddAndEvenSum(number){

    let numberAsString = number.toString();

    let sumEven = 0;
    let sumOdd = 0;

    for(let char of numberAsString){

        let currentDigit = Number(char);

        if (currentDigit % 2 === 0){
            sumEven += currentDigit;
        } else {
            sumOdd += currentDigit;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddAndEvenSum(1000435);