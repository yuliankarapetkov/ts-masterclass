import { Human, HumanKeys, HumanTypes } from './../02-02-keyof-type-queries';

let h: Human = {
    name: 'John Doe',
    age: 29
}

function getProperty<T, K extends keyof T>(obj: T, key: K): any {
    return obj[key];
}

getProperty(h, 'name');
// getProperty(h, 'nameS') - won't work
