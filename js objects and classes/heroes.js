function heroes(arr){

let heroes = [];

for(let i = 0; i < arr.length; i++){
    let [heroName, heroLevel, heroItems] = arr[i].split(' / ');
    heroLevel = Number(heroLevel);

    let heroObj = {name: heroName, level: heroLevel, items: heroItems};
    heroes.push(heroObj);    
}

let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

for (const heroObj of sortedHeroes) {

    console.log(`Hero: ${heroObj.name}`);
    console.log(`level => ${heroObj.level}`);
    console.log(`items => ${heroObj.items}`);
    
}

}
heroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);