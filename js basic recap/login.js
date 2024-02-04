function login(input){

    //input.shift takes [0] and saves it ONLY in the variable 'username'
    //input[0] USES [0] and [0] remains a part of the array
    let username = input.shift();
    let pass ='';


    //password = reversed username 
    for (let i = username.length - 1; i >= 0; i--){
        
        pass += username[i];
    }
    
    //next input, guesses count
    let guess = input.shift();
    let wrongGuesses = 0;

    //counting wrong guesses and trying again
    // return; ends the whole function (break; ends only the cycle)
    while(guess !== pass){
        wrongGuesses++;
        console.log(guess);

        if(wrongGuesses === 4){
            console.log(`User ${username} blocked!`);
           return;
        }

        console.log("Incorrect password. Try again.");
        guess = input.shift();
    }

    //eventually correct password
    console.log(`User ${username} logged in.`);


}

login(['Acer', 'blah', 'blah', 'omg', 'recA']);