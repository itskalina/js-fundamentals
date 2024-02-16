function palindromeintegers(array){

    for(let num of array){

        let isPalidrome = checkIfPalidrome(num);
        console.log(isPalidrome);
    }

    function checkIfPalidrome(number){

        let numberAsString = number.toString();
        let reversedNumber = numberAsString.split('').reverse().join('');
    
        if(numberAsString === reversedNumber){
            return true;
        } else {
            return false;
        }
     }
}

palindromeintegers([123,323,421,121]);