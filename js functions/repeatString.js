function repeatString(string, n){

    let newString = string;

    for(let i = 1; i < n; i++){newString += string;}

    console.log(newString);
}

repeatString('abc', 3);