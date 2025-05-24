// Clase base
class Animal {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`${this.name} hace un ruido.`);
    }
}

// Clase derivada
class Dog extends Animal {
    constructor(name, race) {
        super(name); // Llama al constructor de Animal
        this.race = race;
    }

    talk() {
        console.log(`${this.name} ladra.`);
    }
}

// Uso
const myDog = new Dog('Firulais', 'Labrador');
myDog.talk(); // Firulais ladra.


// Ejemplo de herencia prototípica
function AnimalTwe(name) {
    this.name = name;
}
AnimalTwe.prototype.talk = function() {
    console.log(`${this.name} hace un ruido.`);
}
function DogTwe()
{
    AnimalTwe.call(this, 'Firulais'); // Llama al constructor de Animal
}
DogTwe.prototype = Object.create(AnimalTwe.prototype);
DogTwe.prototype.constructor = DogTwe;
DogTwe.prototype.talk = function() {
    console.log(`${this.name} ladra.`);
}
// Uso
const myDog2 = new DogTwe();
myDog2.talk(); // Firulais ladra.


// Ejemplo de herencia prototípica con Object.create
const animal = {
    name: 'Animal',
    talk: function() {
        console.log(`${this.name} hace un ruido.`);
    }
};
const dog = Object.create(animal);
dog.name = 'Firulais';
dog.talk = function() {
    console.log(`${this.name} ladra.`);
}
// Uso
dog.talk(); // Firulais ladra.


// Ejemplo de herencia prototípica con Object.create y métodos
const animal1 = {
    name: 'Animal',
    talk: function() {
        console.log(`${this.name} hace un ruido.`);
    }
};
const dog1 = Object.create(animal1);
dog1.name = 'Firulais';
dog1.talk = function() {
    console.log(`${this.name} ladra.`);
}
// Uso
dog1.talk(); // Firulais ladra.


// Ejemplo de herencia prototípica con Object.create y propiedades
const animal2 = {
    name: 'Animal',
    talk: function() {
        console.log(`${this.name} hace un ruido.`);
    }
};
const dog2 = Object.create(animal2);
dog2.name = 'Firulais';
dog2.talk = function() {
    console.log(`${this.name} ladra.`);
}
// Uso
dog2.talk(); // Firulais ladra.