function max(arr){

    let topInt = [];
    
        for (let i = 0; i < arr.length; i++){
             isTop = true;

            for(let j = i + 1; j < arr.length; j++){
                if(arr[i] <= arr[j]){
                isTop = false;}
            }
            if(isTop === true){
                topInt.push(arr[i]);
            }

        }

    console.log(topInt.join(' '));

}

max([1, 4, 3, 2]);