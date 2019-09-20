const person = {
    name: 'Yulian',
    age: 28
};

type Person = typeof person;

const anotherPerson: Person = {
    name: 'Todd',
    age: 28
};
