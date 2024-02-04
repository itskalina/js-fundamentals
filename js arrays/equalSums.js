function EqualSums(arr){

    let isTrue = false;

    for(let i = 0; i < arr.length; i++){

        if(arr.length <= 0){
            console.log(0);
            break;
        }

        let sumBefore = 0;
        let sumAfter = 0;

        let elelmentsBefore = arr.slice(0, i);
        let elementsAfter = arr.slice(i + 1, arr.length);

        elelmentsBefore.map(el => sumBefore += el);
        elementsAfter.map(el => sumAfter += el);

        if(sumAfter === sumBefore){
            isTrue = true;
            console.log(i);
            break;
        }
    }

    if(!isTrue){
        console.log('no');
    }

}
EqualSums([1, 2, 3, 3]);