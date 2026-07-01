const factorial = function(n) {
    if (!Number.isInteger(n) || n < 0) return;
    if (n === 0) return 1;
    return n * factorial(n - 1)
};

// takes a number
// checks if number is 0 and returns if so
// returns n * factorial(n-1)
// check if n is less than zero
// check if n is a decimal
// check if n is a string


// Do not edit below this line
module.exports = factorial;