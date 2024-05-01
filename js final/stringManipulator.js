function stringManipulator(inputArr){

    let firstString = inputArr.shift();
    let replacedString = '';
    
    for(let i = 0; i < inputArr.length; i++){

        if (inputArr[i].includes('Translate')){

            let tokens = inputArr[i].split(' ');
            let originalChar = tokens[1];
            let newChar = tokens[2];

            let regex = new RegExp(originalChar, 'g');

            let repString = firstString.replace(regex, newChar);

            console.log(repString);

            replacedString += repString;

        } else if (inputArr[i].includes('Includes')){

            let tokens = inputArr[i].split(' ');
            let stringCheck = tokens[1];

            if(firstString.includes(stringCheck)){
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (inputArr[i].includes('Start')){

            let tokens = inputArr[i].split(' ');
            let firstWord = tokens[1];

            if(replacedString.startsWith(firstWord)){
                console.log('True');
            } else {
                console.log('False');
            }

        } else if (inputArr[i].includes('Lowercase')){

            replacedString = replacedString.toLowerCase();

            console.log(replacedString);
 
        } else if (inputArr[i].includes('FindIndex')){

            let tokens = inputArr[i].split(' ');
            let index = tokens[1];

            let lastIndex = replacedString.lastIndexOf(index);
            console.log(lastIndex);

        } else if (inputArr[i].includes('Remove')){

            let tokens = inputArr[i].split(' ');
            let firstIndex = parseInt(tokens[1]);
            let lastIndex = parseInt(tokens[2]);

            //let [_, startIndex, count] = inputArr[i].split(' ').map(Number);
            replacedString = replacedString.substring(firstIndex,lastIndex);
            console.log(replacedString);

        }
    }

}

stringManipulator(["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"]);