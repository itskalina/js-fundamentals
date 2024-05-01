function easterEggs(input){

let regex = /[@#]+(?<color>[a-z]{3,})+[@#][^a-z\d]*\/(?<count>\d+)\//g;
//let regex = /[@#]+(?<color>[a-z]{3,})+[@#][^a-z\d\/]*(?<count>\d+)+\//g;




let validEggs = [];

let match = '';


while ((match = regex.exec(input)) !== null) {
    let color = match.groups.color;
    let count = match.groups.count;

    validEggs.push({ color, count });

    //console.log(validEggs);
}




validEggs.forEach(egg => {
    
    console.log(`You found ${egg.count} ${(egg.color)} eggs!`);
})

}
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);