function charactersInRange(char1, char2){

    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);
    let result = [];

    if (end > start){

        for(let i = start + 1; i < end; i++){
            result.push(String.fromCharCode(i));
        }

    } else {
        
        for(let i = end + 1; i < start; i++){
            result.push(String.fromCharCode(i));
        }

    }

    console.log(result.join(' '));

}
charactersInRange('#', ':');