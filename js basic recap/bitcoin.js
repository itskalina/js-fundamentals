function bitcoin(input){

    const bitcoinPrice = 11949.16; 
    const goldGram = 67.51;

  let money = 0;
  let bitcoinsBought = 0;
  let firstBitcoinDay = 0;
  let day = 0;
  

  for (let i = 0; i < input.length; i++) {
    let minedGold = input[i];
    day++;

    if (day % 3 === 0) {
      minedGold *= 0.7; // Stealing 30% every third day
    }

    money += minedGold * goldGram;

    // Check if there's enough gold to buy a bitcoin
    while (money >= bitcoinPrice) {
      bitcoinsBought++;
      money -= bitcoinPrice;

      if(bitcoinsBought === 1){
        firstBitcoinDay = i + 1;
      }

    }

  }


console.log(`Bought bitcoins: ${bitcoinsBought}`);

if (bitcoinsBought > 0){
  console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
}

console.log(`Left money: ${(money).toFixed(2)} lv.`);   
}

bitcoin([100, 200, 300]);