// import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

//Tests for function fromEuroToDollar
test("One euro should be 1.206 dollars", () => {

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
});


//Tests for function fromDollarToYen

test("One dollar should be 106.6 yen", () => {

    const yens = fromDollarToYen(20)
    const expected = 20 * 106.6; 
    expect(fromDollarToYen(20)).toBe(2132);
});

//Tests for function fromYenToPound

test("159.9 yen should be 1 pound", () => {

    const pounds = fromYenToPound(3198)
    const expected = 3198/159.9; 
    expect(fromYenToPound(3198)).toBe(20);
});