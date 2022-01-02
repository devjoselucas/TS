export function multiplicaArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

const result = multiplicaArgs(1,2,3,4,5,6);

console.log(result);