// Union types work with types, enums, strings, numbers and booleans.
function printNumberOneTwoThree(num: 1 | 2 | 3): void {
    console.log(num);
}

printNumberOneTwoThree(3);