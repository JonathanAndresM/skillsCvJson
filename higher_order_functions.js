// Ejemplo de funciones de orden superior en JavaScript

// 1. Una función que acepta otra función como argumento
function aplicarOperacion(arr, operacion) {
    return arr.map(operacion);
}

// Uso:
const numeros = [1, 2, 3, 4];
const alCuadrado = x => x * x;
console.log(aplicarOperacion(numeros, alCuadrado)); // [1, 4, 9, 16]

// 2. Una función que retorna otra función
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

// Uso:
const duplicar = crearMultiplicador(2);
console.log(duplicar(5)); // 10

// 3. Ejemplo con forEach (función de orden superior incorporada)
numeros.forEach(num => {
    console.log(`Número: ${num}`);
});