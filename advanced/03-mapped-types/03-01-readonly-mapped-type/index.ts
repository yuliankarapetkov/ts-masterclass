import { Human } from './../../02-type-queries/02-02-keyof-type-queries';

const h1: Human = {
    name: 'Yulian',
    age: 28
};

type MyReadonly<T> = {
    readonly [P in keyof T]: T[P];
}

function myFreeze<T>(obj: T): MyReadonly<T> {
    return Object.freeze(obj);
}

const readonlyh1 = myFreeze<Human>(h1);

// readonlyh1.age = 1; - error