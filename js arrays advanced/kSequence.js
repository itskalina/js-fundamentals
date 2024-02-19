function kSequence(n, k){

    let newArr = [];
    let firstElement = 1;
    let newElement = 0;

    newArr.push(firstElement);

 for (let sequence = 1; sequence < n; sequence++){

     newElement += sequence;
     newArr.push(newElement);

 }   

 console.log(newArr);

}
kSequence(6, 3);