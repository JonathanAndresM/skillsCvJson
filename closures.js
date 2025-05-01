// Ejemplo de funciones que utilizan closures para capturar el estado de su entorno

// Closure: una función que recuerda el entorno en el que fue creada
// Ejemplo de closure: función que crea un contador

function createCounter() {
    let counter = 0; // Variable capturada por el closure

    return {
        increment: function () {
            counter++;
            return counter;
        },
        decrement: function () {
            counter--;
            return counter;
        },
        getValue: function () {
            return counter;
        }
    };
}

// Uso del closure
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue()); // 1


// Otro ejemplo: función para crear saludos personalizados
function createGreeting(greeting) {
    return function (name) {
        return `${greeting}, ${name}!`;
    };
}

const SpanishGreeting = createGreeting("Hola");
const EnglishGreeting = createGreeting("Hello");

console.log(SpanishGreeting("Carlos")); // Hola, Carlos!
console.log(EnglishGreeting("John")); // Hello, John!


// Ejemplo de closure con setTimeout
function createCounterWithDelay() {
    let counter = 0;

    return function () {
        setTimeout(function () {
            counter++;
        }, 1000); // incrementa el contador después de 1 segundo
        return counter; // Devuelve el valor actual del contador (0 en este caso)
    }
}

const counterWithDelay = createCounterWithDelay();
console.log(counterWithDelay()); // 0 (inicialmente)
// Después de 1 segundo, el contador se incrementará a 1, pero no se mostrará aquí


// Example of closures to create a multiplier function
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15