function vacation(peopleCount, type, day){

    let pricePerPerson = 0.0;

    switch(day){
        case "Friday":
            if(type === "Students"){
                pricePerPerson = 8.45;
            } else if (type === "Business"){
                pricePerPerson = 10.90;
            } else if(type === "Regular"){
                pricePerPerson = 15;
            } 
            break;
            

        case "Saturday":
            if(type === "Students"){
                pricePerPerson = 9.80;
            } else if (type === "Business"){
                pricePerPerson = 15.60;
            } else if(type === "Regular"){
                pricePerPerson = 20;
            } 
            break;

        case "Sunday":
            if(type === "Students"){
                pricePerPerson = 10.46;
            } else if (type === "Business"){
                pricePerPerson = 16;
            } else if(type === "Regular"){
                pricePerPerson = 22.50;
            } 
            break;
    }

    let totalPrice = pricePerPerson * peopleCount;

    if(type === "Students" && peopleCount >= 30){
        totalPrice = totalPrice - (totalPrice * 0.15);

    } else if (type === "Business" && peopleCount >=100){
        totalPrice = pricePerPerson * (peopleCount - 10);
    } else if (type === "Regular" && peopleCount >= 10 && peopleCount <=20){
        totalPrice = totalPrice - (totalPrice * 0.05);
    }


    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

