function meowingCats(array){

    let cats = [];


    class Cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
    
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

   
    for (i = 0; i < array.length; i++){
        let catData = array[i].split(' ');
        cats.push(new Cat(catData[0], catData[1]));
    }  

    for (const cat of cats) {
        cat.meow()
    }

}

meowingCats(['Mellow 2', 'Tom 5']);
    






