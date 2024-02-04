function isPrime(number) {

    // Check if the number is less than 2 (not prime)
    if (number < 2) {
        console.log('false');
        return;
    }

    // Check for divisibility from 2 to the square root of the number (formula)
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If divisible, the number is not prime
            console.log('false');
            return;
        }
    }

    // If not divisible by any number between 2 and the square root, it's prime
    console.log('true');
}

isPrime(1);