// Function Composition: encadenar funciones pequeñas en una sola función compleja

// compose: compone funciones de derecha a izquierda
const compose = (...fns) => x => fns.reduceRight((v, fn) => fn(v), x);

// Ejemplo de funciones pequeñas
const double = x => x * 2;
const increment = x => x + 1;
const square = x => x * x;

// Componer funciones: primero square, luego increment, luego double
const complexFunction = compose(double, increment, square);

// Uso
console.log(complexFunction(3)); // ((3 * 3) + 1) * 2 = 20


// Composición con funciones asíncronas
const asyncCompose = (...fns) => async x => {
    return fns.reduceRight(async (v, fn) => fn(await v), x);
};
// Ejemplo de funciones asíncronas
const asyncDouble = async x => x * 2;
const asyncIncrement = async x => x + 1;
const asyncSquare = async x => x * x;
// Componer funciones asíncronas
const asyncComplexFunction = asyncCompose(asyncDouble, asyncIncrement, asyncSquare);
// Uso
(async () => {
    console.log(await asyncComplexFunction(3)); // ((3 * 3) + 1) * 2 = 20
})();


// Composición con funciones que retornan otras funciones
const composeWithReturn = (...fns) => x => {
    return fns.reduceRight((v, fn) => fn(v), x);
};
// Ejemplo de funciones que retornan otras funciones
const addCurried = a => b => a + b;
const multiplyCurried = a => b => a * b;
const subtractCurried = a => b => a - b;
// Componer funciones que retornan otras funciones
const complexCurriedFunction = composeWithReturn(
    subtractCurried(5), // resta 5
    multiplyCurried(3), // multiplica por 3
    addCurried(2) // suma 2
);
// Uso
console.log(complexCurriedFunction(4)); // ((2 + 4) * 3) - 5 = 7