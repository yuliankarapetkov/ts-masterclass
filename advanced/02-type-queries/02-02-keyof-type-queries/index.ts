export type Human = {
    name: string;
    age: number;
};

export type HumanKeys = keyof Human;

export type HumanTypes = Human[HumanKeys];