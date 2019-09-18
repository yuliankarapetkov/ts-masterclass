let calculateOrder: (price: number, quantity: number) => number;

calculateOrder = (price, number) => price * number;
// or
calculateOrder = (x, y) => x * y;
// or
let calculateOrderAgain: (price: number, quantity: number) => number = (x, y) => x * y;
// or obviously
let calculateOrderLastTime = (price: number, quantity: number): number => price * quantity;


function callMe(func: Function): void {
    console.log(func(25, 2));
}

callMe(calculateOrder);

function callMeAgain(func: (price: number, quantity: number) => number): void {
    console.log(func(25, 2));
}

callMeAgain(calculateOrder);