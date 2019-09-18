interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): string[];
}

// Note the difference between a function in an interface and a function type
type getSizes = () => string[];

const named: string = 'Hello';


let guz: any = 5;
guz = 'hello';
