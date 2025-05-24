
const person = {
  name: "John",
    age: 30,
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

// Ejemplo de uso

person.greet(); // Hello, my name is John and I am 30 years old.
// En este caso, `this` se refiere al objeto `person` porque la función `greet` es un método de ese objeto.

function greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

const personTwe = {
    name: "Alice",
    age: 25
};

// Ejemplo de uso
greet.call(personTwe); // Hello, my name is Alice and I am 25 years old.
// En este caso, `this` se refiere al objeto `personTwe` porque usamos `call` para invocar la función `greet` con `personTwe` como contexto.
// También podemos usar `apply` de manera similar

greet.apply(personTwe); // Hello, my name is Alice and I am 25 years old.
// En este caso, `this` se refiere al objeto `personTwe` porque usamos `apply` para invocar la función `greet` con `personTwe` como contexto.
// También podemos usar `bind` para crear una nueva función con un contexto específico

const boundGreet = greet.bind(personTwe);

// Ejemplo de uso
boundGreet(); // Hello, my name is Alice and I am 25 years old.
// En este caso, `this` se refiere al objeto `personTwe` porque usamos `bind` para crear una nueva función con `personTwe` como contexto.

// En resumen, `this` se refiere al contexto de ejecución actual y puede cambiar dependiendo de cómo se invoque la función.
// En el caso de los métodos de un objeto, `this` se refiere al objeto que contiene el método.
// En el caso de funciones independientes, `this` se refiere al objeto global (o `undefined` en modo estricto).
// En el caso de usar `call`, `apply` o `bind`, podemos especificar explícitamente el contexto de `this`.

// Ejemplo 1: Función flecha como método de objeto (NO recomendado)
const personThree = {
    name: "Bob",
    age: 40,
    greet: () => {
        // En este caso, `this` no se refiere al objeto `personThree` porque las funciones flecha no tienen su propio contexto de `this`.
        // En su lugar, `this` se refiere al contexto de ejecución en el que se definió la función flecha.
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};
// Ejemplo de uso
personThree.greet(); // Hello, my name is undefined and I am undefined years old.

// Ejemplo 2: Función flecha dentro de un método tradicional (caso útil)
const personFour = {
    name: "Charlie",
    age: 35,
    friends: ["Alice", "Bob"],
    greetFriends: function () {
        // En este caso, `this` se refiere al objeto `personFour`.
        this.friends.forEach(friend => {
            // Aquí, `this` se refiere al objeto `personFour` porque la función flecha captura el contexto de `this`.
            console.log(`Hello ${friend}, my name is ${this.name} and I am ${this.age} years old.`);
        });
    }
};
// Ejemplo de uso
personFour.greetFriends();
// Hello Alice, my name is Charlie and I am 35 years old.
// Hello Bob, my name is Charlie and I am 35 years old.
// En este caso, la función flecha dentro del método `greetFriends` captura el contexto de `this` del objeto `personFour`, lo que permite acceder a sus propiedades.

// - Las funciones flecha NO tienen su propio 'this', heredan el del contexto donde fueron creadas.
// - No usar funciones flecha como métodos de objetos si necesitas acceder a 'this' del objeto.
