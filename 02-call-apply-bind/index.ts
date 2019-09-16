const obj = {
    name: 'Yulian'
};

function myF(this: any, arg1: string, arg2: string) {
    console.log(`${this} is called with arguments ${arg1} and ${arg2}`);
}

myF('abc', 'def')

myF.call(obj, 'abc', 'def'); // call - c - comma
myF.apply(obj, ['abc', 'def']); // apply - a - array

const functionBoundAot = myF.bind(obj, 'abc', 'def');
const functionBoundAotExtended = myF.bind(obj, 'abc');
const functionBound = myF.bind(obj);

functionBoundAot();
functionBoundAotExtended('def');
functionBound('abc', 'def')
