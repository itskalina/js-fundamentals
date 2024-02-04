function LatinLeters(n){
    for (let s = 0; s < n; s++) {
        for(let v = 0; v < n; v++){
            for(let h = 0; h < n; h++){

                let letter1 = String.fromCharCode(97 + s);
                let letter2 = String.fromCharCode(97 + v);
                let letter3 = String.fromCharCode(97 + h);

                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
        
    }
}
LatinLeters(2);