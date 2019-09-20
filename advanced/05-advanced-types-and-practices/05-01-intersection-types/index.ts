interface WithA {
    a: string;
    f1(): void;
    type: 'with-a';
}

interface WithB {
    b: string;
    f2(): void;
    type: 'with-b';
}

// Kind of like inheritance, but not exactly
type Intersection = WithA & WithB;

let i: Intersection = {
    a: 'a',
    b: 'b',
    f1: () => {},
    f2: () => {}
}

type Union = WithA | WithB;

let u: WithA = {
    a: 'name',
    f1: () => {},
    type: 'with-a'
}

function checkUnion(union: Union) {
    if (union.type === 'with-a') {
        // ...
    } else {
        // ...
    }
}