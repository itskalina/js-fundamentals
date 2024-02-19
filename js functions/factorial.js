function factorial(number1, number2){

    let factorial1 = calculateFactorial(number1);
    let factorial2 = calculateFactorial(number2);
    let division = factorial1 / factorial2;

    console.log(division.toFixed(2));

    function calculateFactorial(num){
        let factorial = 1;
        while (num > 1){
            factorial *= num;
            num--;
        }
        return factorial;
    }
}
factorial(5, 2);