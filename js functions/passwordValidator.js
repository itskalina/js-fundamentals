function passwordValidator(pass){

    let passAsString = pass.toString();

    let passwordLength = 0;
    let digitsInPassword = 0;
    let symbols = 0;


    for(let i = 0; i < passAsString.length; i++){
        let currentChar = passAsString[i];

        if (/^[0-9]$/.test(currentChar)) {
            digitsInPassword++;
            passwordLength++;
        } else if (/^[a-zA-Z]$/.test(currentChar)) {
            passwordLength++;
        } else {
            symbols++;
            passwordLength++;
        }
    }
     
    if(passwordLength >= 6 && passwordLength <= 10 && symbols <= 0 && digitsInPassword >= 2){
        console.log("Password is valid");
        return;
    }
    
    if(passwordLength < 6 || passwordLength > 10){
        console.log("Password must be between 6 and 10 characters");
    }
    
     if(symbols > 0){
        console.log("Password must consist only of letters and digits");
    } 
    
    if(digitsInPassword < 2){
        console.log("Password must have at least 2 digits");
    }

}

passwordValidator('MyPas$');