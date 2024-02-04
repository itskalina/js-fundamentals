function spices(yeild){

  let day = 0;
  let extractedSpices = 0;

  while(yeild >= 100){
    day++;
    extractedSpices += yeild - 26
    yeild -= 10;
}

   extractedSpices -= Math.min(extractedSpices, 26);

   
   console.log(day);
   console.log(extractedSpices);
}

spices(450);
