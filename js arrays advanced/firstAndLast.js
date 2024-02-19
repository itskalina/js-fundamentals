function sumFurstAndLast(arr){

    let firstNum = Number(arr[0]);

    let lastNum = Number(arr[arr.length - 1]);
    let sum = firstNum + lastNum;

    let sumAsString = sum.toString();

    console.log(sumAsString);
}

sumFurstAndLast(['20', '30', '40']);