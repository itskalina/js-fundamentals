function sum(num){

    let sum = 0;
    let number = num.toString();
    

    for(let i = 0; i < number.length; i++ ){

        sum += Number(number[i]);
    }

    console.log(sum);
}
sum(245678);