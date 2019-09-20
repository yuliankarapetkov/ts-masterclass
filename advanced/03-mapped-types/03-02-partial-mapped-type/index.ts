import { Human } from "../../02-type-queries/02-02-keyof-type-queries";

let h2: Human = {
    name: 'Yulian',
    age: 28
};

type MyPartial<T> = {
    [P in keyof T]?: T[P];
}

function updateProperty(human: Human, prop: Partial<Human>): Human {
    return { ...human, ...prop };
}

updateProperty(h2, { name: 'a', age: 23 });