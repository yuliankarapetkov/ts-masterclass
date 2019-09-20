class WithName {
    constructor(public name: string) {}
}

class WithTitle {
    constructor(public title: string) {}
}

// some dope syntax
function isWithName(obj: any): obj is WithName {
    return obj instanceof WithName;
}

function getNameOrTitle(obj: WithName | WithTitle) {
    // if (obj instanceof WithName) {
    //     return obj.name;
    // }

    // return obj.title;

    if (isWithName(obj)) {
        return obj.name;
    }

    return obj.title;
}