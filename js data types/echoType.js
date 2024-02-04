function echo(input){

    console.log(typeof input);

    if (typeof(input) === "string") {
        console.log(input);
    } else if (typeof (input) === "number") {
        console.log(input);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}

echo(null);
