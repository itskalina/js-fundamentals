function common(arr1, arr2){

    for (let str of arr1){
        if(arr2.includes(str)){
            console.log(str);
        }
    }

}

common(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);