function towns(array){


    for(i = 0; i < array.length; i++){
        let [town, longitude, latitude] = array[i].split(' | ');
        let numLong = parseFloat(longitude);
        let numLat = parseFloat(latitude);
        let fixedNumLong = numLong.toFixed(2);
        let fixedNumLat = numLat.toFixed(2);


        let currentTown = {

            town : `${town}`,
            latitude : fixedNumLong,
            longitude : fixedNumLat
        }
        console.log(currentTown);
            
    }
        
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);