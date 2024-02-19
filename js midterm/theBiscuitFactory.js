function theBiscuitFactory(array){

    let biscuitsPerWorker = array[0];
    let workersCount = array[1];
    let competitionBiscuitsCount = array[2];

    let usualProduction = biscuitsPerWorker * workersCount;
    let slowDaysProduction = Math.floor(usualProduction * 0.75);
    let productionAMonth = usualProduction * 20 + slowDaysProduction * 10;

    console.log(`You have produced ${productionAMonth} biscuits for the past month.`);


    if (productionAMonth > competitionBiscuitsCount){

       let difference = productionAMonth - competitionBiscuitsCount;
       let percentage = (difference / competitionBiscuitsCount) * 100;
       console.log(`You produce ${percentage.toFixed(2)} percent more biscuits.`);
    } else {

        let difference = competitionBiscuitsCount - productionAMonth;
        let percentage = (difference / competitionBiscuitsCount) * 100;
        console.log(`You produce ${percentage.toFixed(2)} percent less biscuits.`);
    }


}

theBiscuitFactory(["163", "16", "67020"]);