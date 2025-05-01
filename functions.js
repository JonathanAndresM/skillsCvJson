// Declaración de una función tradicional
function greet(name) {
    return `Hola, ${name}!`;
}
console.log(greet("Jonathan"));

// Función anónima asignada a una variable
const dismiss = function(name) {
    return `Adiós, ${name}!`;
};
console.log(dismiss("Jonathan"));

// Función de flecha (arrow function)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

// Función de flecha con múltiples líneas
const split = (a, b) => {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
};
console.log(split(10, 2));
console.log(split(10, 0));
