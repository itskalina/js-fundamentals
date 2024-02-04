function ReverseArray(n, array){

    //new empty array
    let arr=[];

    //taking n numbers from the original array
    //and putting them in the new array
    for(let i = 0; i < n; i++){
        arr.push(array[i]);
    }

    //empty string
    let output = '';

    //reversing the numbers from the new array
    for(i = arr.length - 1; i>=0; i--){
        output += `${arr[i]} `;
    }
    console.log(output);

}

ReverseArray(3, [10, 20, 30, 40, 50]);