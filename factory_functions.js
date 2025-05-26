/**
 * Factory function para crear un objeto Persona
 * @param {string} name
 * @param {number} age
 * @returns {object}
 */
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            return `Hola, mi nombre es ${this.name} y tengo ${this.age} años de edad.`;
        }
    };
}

// Ejemplo de uso
// Crear una persona usando la función de fábrica
const person1 = createPerson('Ana', 30);
console.log(person1.greet()); // "Hola, mi nombre es Ana y tengo 30 años de edad."
const person2 = createPerson('Luis', 25);
console.log(person2.greet()); // "Hola, mi nombre es Luis y tengo 25 años de edad."