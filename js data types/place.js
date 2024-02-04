function place(wordWithUnderscore, replacementChar, secondString){
    
        // Replace the underscore with the replacement character
        // lecture about replace tool ??? 
        let replacedWord = wordWithUnderscore.replace('_', replacementChar);
    
        // Compare the result with the second string
        if (replacedWord === secondString) {
            console.log("Matched");
        } else {
            console.log("Not Matched");
        }
    

}

place('Str_ng', 'i', 'String');