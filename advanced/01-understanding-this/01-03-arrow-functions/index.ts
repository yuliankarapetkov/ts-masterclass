class MyClass {
    myMethod() {
        const foo = 123;
        console.log('Method scope', this);

        // A function creates its own scope.
        setTimeout(function(this: any) {
            console.log('setTimeout function scope', this);
        }, 0);

        // An arrow function does not inherit the this value, it just simply does not bind a this value.
        setTimeout(() => {
            console.log('setTimeout arrow function scope', this);
        });
    }
}

const obj1 = new MyClass();
obj1.myMethod();