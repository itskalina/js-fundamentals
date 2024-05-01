function employeesPersonalNumbers(array){
    
    for (const key of Object.keys(array)) {
        
        console.log(`Name: ${array[key]} -- Personal Number: ${array[key].length}`);
   
    }  

}
employeesPersonalNumbers(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);