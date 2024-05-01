function makeADictionary(terms){

    // create object
    let dictionaryObj = {};

    //go trough the termes given, json.parse to transform them into objects
    for (let term of terms){
        let termObj = JSON.parse(term);

        dictionaryObj[Object.keys(termObj)[0]] = Object.values(termObj)[0];   //divide the keys(terms) and values(definitions)
        
    }
    
    

    // go trough the object, printing keys and values, sorted
    for (const [key,value] of Object.entries(dictionaryObj).sort()) {

        console.log(`Term: ${key} => Definition: ${value}`);
    }
    

}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]);