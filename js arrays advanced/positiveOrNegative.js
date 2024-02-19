function positiveOrNegative(array){

    let newArr = [];

    for (let i = 0; i < array.length; i++){

        if (Number(array[i]) < 0){

            newArr.unshift(array[i]);

        } else {

            newArr.push(array[i]);

        }
    }

    for (let m = 0; m < newArr.length; m++){
         console.log(newArr[m]);
    }
    

}
positiveOrNegative(['3', '-2', '0', '-1']);