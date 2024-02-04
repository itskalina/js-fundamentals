function reading(pagesCount, pagesPerHour, days){

    let hours = pagesCount / pagesPerHour;
    let hoursPerDay = hours / days;

    console.log(hoursPerDay);
}

reading(212, 20, 2);
