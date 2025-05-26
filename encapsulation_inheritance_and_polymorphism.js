// Encapsulamiento: Usando clases y campos privados para encapsular datos
class Person {
    #name; // campo privado
    #age;  // campo privado

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        }
    }

    describe() {
        return `${this.#name} tiene ${this.#age} años.`;
    }
}

// Herencia: Extendiendo la clase Person
class Employee extends Person {
    #position;

    constructor(name, age, position) {
        super(name, age); // Llama al constructor padre
        this.#position = position;
    }

    getPosition() {
        return this.#position;
    }

    // Polimorfismo: Sobrescribiendo el método describe
    describe() {
        return `${this.getName()} tiene ${this.getAge()} años y trabaja como ${this.#position}.`;
    }
}

// Ejemplos de uso
const person = new Person('Ana', 30);
console.log(person.describe()); // Ana tiene 30 años.

const employee = new Employee('Luis', 28, 'Desarrollador');
console.log(employee.describe()); // Luis tiene 28 años y trabaja como Desarrollador.