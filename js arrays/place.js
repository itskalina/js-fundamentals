function place(string){

    let reversedArray = string.reverse();
    let output = ''
    
    for(let i = 0; i <= reversedArray.length-1; i++){

        output+=`${reversedArray[i]} `

    }

console.log(output);
}

place(['a', 'b', 'c', 'd', 'e']);