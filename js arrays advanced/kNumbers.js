
function kNumbers(array){

    let numK = array.shift();
    let resultForward = [];
    let resultBackward = [];

    for (let first = 0; first < numK; first++){

        resultForward.push(array[first]);

    }
    
    for (let second = array.length -1 ; second >= array.length - numK; second --){

        resultBackward.unshift(array[second]);
    }

    console.log(resultForward.join(' '));
    console.log(resultBackward.join(' '));

}

kNumbers([3, 6, 7, 8, 9]);