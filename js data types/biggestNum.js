function numbers(first, second, third){

    if(first > second && first > third){
        console.log(first);
        return;
    } if (second > first && second > third) {
        console.log(second);
        return;
    } else {
        console.log(third);
    }
}

numbers(130, 5, 99);