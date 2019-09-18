let calcuateOrder: (price: number, quantity?: number) => number;

calcuateOrder = (x, y) => x * (y || 1);
// or
calcuateOrder = (x, y = 1) => x * y;

console.log(calcuateOrder(25));