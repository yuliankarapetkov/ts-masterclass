type OptionalType = {
    name?: string;
    age?: number;
};

type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};

const optional: OptionalType = { };

const required: MyRequired<OptionalType> = { age: 23, name: 'John' }

// - removes an operator
// Example: make all fields writeable

type ReadonlyType = {
    readonly name: string;
    readonly age: number;
};

const readonlyInstance: ReadonlyType = {
    name: 'Yulian',
    age: 28
};

// readonlyInstance.age = 5; - Cannot assign to 'age' because it is a read-only property.

type WriteableType<T> = {
    -readonly [P in keyof T]: T[P];
};

const writableInsance: WriteableType<ReadonlyType> = {
    name: 'Yulian',
    age: 28
};

writableInsance.age = 5; // like a boss