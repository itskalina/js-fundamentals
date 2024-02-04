function pyramid(base, increment){
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let height = 0;
    let levelCount = 1;

    for(let i = base; i > 0; i -= 2){
        
        height += increment;
        let totalArea = i ** 2;
        

        if(i <= 2){
            gold = totalArea * increment;
        } else {
            let stoneUsed = (i - 2) ** 2; 
        stone += stoneUsed * increment;

           if(levelCount % 5 === 0){
            let lapisUsed = totalArea - stoneUsed;
            lapis += lapisUsed * increment; 
           } else {
            let marbleUsed = totalArea - stoneUsed;
            marble += marbleUsed * increment; 
           }

           levelCount++;
        }

        
        }

        console.log(`Stone required: ${Math.ceil(stone)}`);
        console.log(`Marble required: ${Math.ceil(marble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
        console.log(`Gold required: ${Math.ceil(gold)}`);
    
        
    
        console.log(`Final pyramid height: ${Math.floor(height)}`);

    }




