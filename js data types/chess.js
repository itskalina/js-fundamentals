function chess(n){

    let color1 ='';
    let color2 ='';

    console.log('<div class="chessboard">');

    for(k=1; k<=n; k++){
        if(k % 2 === 1){
            color1 ='black';
            color2 ='white';
        }
        if(k % 2 === 0){
            color1 ='white';
            color2 ='black';
        }
        if(n % 2 === 0 && k % 2 === 1){
            color1 ='black';
            color2 ='white';
        }


        for(i=1; i<=n; i++){
            if(i===1){
                console.log('  <div>');
            }
            if(i%2 === 1){
                console.log(`    <span class="${color1}"></span>`);
            }
            if(i%2=== 0){
                console.log(`    <span class="${color2}"></span>`);
            }
            if(i===n){
                console.log('  </div>');
            }
        }
    }

    console.log('</div>');

}
chess(3);
