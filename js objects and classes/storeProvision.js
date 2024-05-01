function storeProvision(stockArray, orderedProducts){

    let products = [];

    for(let i = 0; i < stockArray.length; i += 2){       //going through the products in stock

        let product = stockArray[i];
        let productQuantity = Number(stockArray[i + 1]);

        let productObj = { name : product, quantity : productQuantity};
        products.push(productObj);
    }

    for(let i = 0; i < orderedProducts.length; i += 2){      //going through the products being delivered

        let product = orderedProducts[i];
        let productQuantity = Number(orderedProducts[i + 1]);

        let productFound = products.find(p => p.name === product);     //cheking if the product is already availible

        if(productFound){

            productFound.quantity += productQuantity; //if it is we add the newly delivered qty

        } else {

            let productObj = { name : product, quantity : productQuantity}; //if it isn't we add the product to the array
            products.push(productObj);
        }
    }

    for (let stockObj of products) {
        console.log(`${stockObj.name} -> ${stockObj.quantity}`);
    }
}
storeProvision(['Chips', '5', 
                'CocaCola', '9', 
                'Bananas', '14', 
                'Pasta', '4', 
                'Beer', '2'],

    ['Flour', '44', 
    'Oil', '12', 
    'Pasta', '7', 
    'Tomatoes', '70',
     'Bananas', '30']);