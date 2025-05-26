class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        // Llama al método greet de Person
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años.`);
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Llama al constructor de Person
        this.position = position;
    }

    greet() {
        super.greet(); // Llama al método greet de Person
        console.log(`Trabajo como ${this.position}.`);
    }
}

// Ejemplo de uso:
const employee = new Employee('Ana', 30, 'Desarrolladora');
employee.greet();
// Salida:
// Hola, mi nombre es Ana y tengo 30 años. 
// Trabajo como Desarrolladora.
// El método greet de Employee llama al método greet de Person y luego agrega su propio mensaje.
// Esto demuestra cómo se puede extender la funcionalidad de una clase base utilizando la herencia en JavaScript.
// También se puede sobrescribir el método greet en Employee para proporcionar un comportamiento específico.
// Además, se puede llamar al método greet de la clase base utilizando super.greet().
// Esto es útil cuando se desea mantener la funcionalidad de la clase base mientras se agrega o modifica el comportamiento en la clase derivada.
// En este ejemplo, la clase Employee hereda de Person y sobrescribe el método greet.
// Esto permite que Employee tenga su propia implementación de greet, pero aún puede acceder a la implementación de Person utilizando super.greet().