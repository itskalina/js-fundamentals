function add(arr){

    let modification = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for(let i=0; i < arr.length; i++){

        originalSum += arr[i];

        if (arr[i] % 2 === 0) {
            arr[i] += i;
            modification.push(arr[i]);
            modifiedSum += arr[i];
        } else {
            arr[i] -= i ;
            modification.push(arr[i]);
            modifiedSum += arr[i];
        }

        

    }

    console.log(modification);
    console.log(originalSum);
    console.log(modifiedSum);
}

add([5, 15, 23, 56, 35]);
