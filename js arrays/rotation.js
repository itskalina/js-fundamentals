function rotation(arr, num){


for (let i = 1; i <= num; i++){

    let firstEl = arr.shift();

    arr.push(firstEl);
}

console.log(arr.join(' '));

}

rotation([51, 47, 32, 61, 21], 2);