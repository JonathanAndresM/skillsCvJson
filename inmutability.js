// Ejemplo de inmutabilidad en JavaScript

// Objeto original
const persona = {
    nombre: "Ana",
    edad: 30
};

// Crear un nuevo objeto sin modificar el original
const personaActualizada = {
    ...persona,
    edad: 31
};

console.log(persona); // { nombre: 'Ana', edad: 30 }
console.log(personaActualizada); // { nombre: 'Ana', edad: 31 }

// Ejemplo con arrays
const numeros = [1, 2, 3];

// Crear un nuevo array agregando un elemento
const nuevosNumeros = [...numeros, 4];

console.log(numeros); // [1, 2, 3]
console.log(nuevosNumeros); // [1, 2, 3, 4]
