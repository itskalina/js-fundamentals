function sequence(arr){

let longestSequence = [];
let currentSequence = [arr[0]];
        
    for(let i = 1; i < arr.length; i++){
        
        if(arr[i] === arr[i-1]){   
            currentSequence.push(arr[i]);
        } else {
            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence.slice();
            }
            currentSequence = [arr[i]];
        }

    }

    console.log(longestSequence.join(' '));
        
}
sequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);