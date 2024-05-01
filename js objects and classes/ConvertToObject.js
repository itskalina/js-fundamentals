function ConvertToObject(input){

    let person = JSON.parse(input);

    for (let key in person) {
        
        console.log(`${key}: ${person[key]}`);
    }

} 
ConvertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');