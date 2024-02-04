function LowerOrUpper(char){


   // char.toUpperCase turns the char in upper-case, if they are equal it means the
   //letter was alredy upper-case

    if(char === char.toUpperCase()) { 
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }

}

LowerOrUpper('P');
