function special(n) {
    
    for (let i = 1; i <= n; i++) {

        let num = String(i);

        let sum = 0;

        for(let p = 0; p < num.length; p++) {
            let digit = num[p];
            sum += Number(digit);
        }

        switch(sum){

            case 5:
            case 7:
            case 11:
                console.log(`${num} -> True`);
                break;
            default:
                console.log(`${num} -> False`);
                break;
        }
        
    }
}

special(15);
