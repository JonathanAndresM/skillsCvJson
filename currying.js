/**
 * Currying: Transforms a function with multiple arguments
 * into a sequence of functions each taking a single argument.
 */

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

// Ejemplo de uso:
function suma(a, b, c) {
    return a + b + c;
}

const sumaCurried = curry(suma);

console.log(sumaCurried(1)(2)(3)); // 6
console.log(sumaCurried(1, 2)(3)); // 6
console.log(sumaCurried(1)(2, 3)); // 6


// También se puede usar con funciones que toman dos argumentos
function resta(a, b) {
    return a - b;
}
const restaCurried = curry(resta);
console.log(restaCurried(5)(3)); // 2
console.log(restaCurried(5, 3)); // 2


// También se puede usar con más de tres argumentos
function multiplicacion(a, b, c, d) {
    return a * b * c * d;
}
const multiplicacionCurried = curry(multiplicacion);
console.log(multiplicacionCurried(2)(3)(4)(5)); // 120
console.log(multiplicacionCurried(2, 3)(4, 5)); // 120


// También se puede usar con funciones que toman un número variable de argumentos
function concatStrings(a, b, c, d) {
    return [a, b, c, d].join(' ');
}
const concatCurried = curry(concatStrings);
console.log(concatCurried('Hola')('mundo')('desde')('currying')); // "Hola mundo desde currying"
console.log(concatCurried('Hola', 'mundo', 'desde', 'currying')); // "Hola mundo desde currying"

// También se puede usar con funciones que toman un número variable de argumentos
function max(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}
const maxCurried = curry(max);
console.log(maxCurried(1)(2)(3, 4, 5)); // 5


// También se puede usar con funciones que toman un número variable de argumentos
function min(a, b, c, d, e) {
    return Math.min(a, b, c, d, e);
}
const minCurried = curry(min);
console.log(minCurried(1)(2)(3, 4, 5)); // 1


// También se puede usar con funciones que toman un número variable de argumentos
function average(a, b, c, d, e) {
    return [a, b, c, d, e].reduce((sum, num) => sum + num, 0) / [a, b, c, d, e].length;
}
const averageCurried = curry(average);
console.log(averageCurried(1)(2)(3, 4, 5)); // 3


// También se puede usar con funciones que toman un número variable de argumentos
function sumArray(a, b, c, d, e) {
    return [a, b, c, d, e].reduce((sum, num) => sum + num, 0);
}
const sumArrayCurried = curry(sumArray);
console.log(sumArrayCurried(1)(2)(3, 4, 5)); // 15