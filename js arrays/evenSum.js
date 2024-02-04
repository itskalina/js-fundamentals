function evenSum(numbers){

    let sumEven = 0;
    let sumOdd = 0;

   for (let i = 0; i < numbers.length; i++){

    if(numbers[i] % 2 === 0){
        sumEven += numbers[i];
    } else {
        sumOdd += numbers[i];
    }
   }

   let difference = sumEven - sumOdd;
   console.log(difference);

}

evenSum([1,2,3,4,5,6]);