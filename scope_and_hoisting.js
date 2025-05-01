// Scope (global, local, block)
// Scope global: Accesible desde cualquier parte del código
// Scope local: Accesible solo dentro de la función donde se declara
// Scope de bloque: Accesible solo dentro del bloque donde se declara (if, for, etc.)

let message = "Hola desde el scope global";

function greet() {
  let message = "Hola desde el scope de función"; // Local
  console.log(message);

  if (true) {
    let message = "Hola desde el bloque if"; // Block
    console.log(message);
  }

  console.log(message); // Función local de nuevo
}

greet();
console.log(message); // Global


// Hoisting (elevación de funciones y variables)

// Función declarada después de ser llamada
greet1();
function greet1() {
  console.log("Hola, fui llamada antes de ser definida gracias al hoisting!");
}

// Variables
console.log("Me llamo " + name); // undefined por hoisting de var
var name = "Juan";