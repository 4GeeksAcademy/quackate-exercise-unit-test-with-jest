// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

//Below this line begin the Euro to currencies conversion functions

const fromEuroToDollar = (euro) => {
    let dollar = euro * 1.2;
    return dollar;
};

const fromDollarToYen = (dollar) => {
    let yen = dollar * 106.6;
    return yen;
};

const fromYenToPound = (yen) => {
    let pound = yen/159.9;
    return pound;
};

console.log(fromEuroToDollar(10))
console.log(fromDollarToYen(25))
console.log(fromYenToPound(4000))


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
