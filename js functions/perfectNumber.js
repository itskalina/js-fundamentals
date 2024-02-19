function perfectNumber(number){

    let divisors = [];
    let sum = 0;

    for (let i = 1; i <= number; i++) {
      if (number % i === 0 && number !== i) {
      divisors.push(i);
      }
    }

    for(let m = 0; m < divisors.length; m++){
        let currentIndex = divisors[m];
        let numM = Number(currentIndex);
        sum = sum + numM;
    }

    if(sum === number){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(1236489);