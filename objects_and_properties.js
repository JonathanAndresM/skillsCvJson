// Creando un objeto usando la notación de llaves
const person = {
    name: "Juan",
    age: 30,
    profession: "Developer"
};

// Accediendo a propiedades usando notación de punto
console.log(person.name); // "Juan"

// Accediendo a propiedades usando notación de corchetes
console.log(person["age"]); // 30

// Agregando una nueva propiedad
person.nationality = "Spanish";

// Modificando una propiedad existente
person.age = 31;

// Eliminando una propiedad
delete person.profession;

// Iterando sobre las propiedades del objeto
for (let key in person) {
    console.log(key + ": " + person[key]);
}


// Creando un objeto usando la función Object()
const car = new Object();
car.make = "Toyota";
car.model = "Corolla";
car.year = 2020;
car.start = function() {
    console.log("El coche ha arrancado");
};
car.start(); // "El coche ha arrancado"


// Creando un objeto usando Object.create()
const animal = {
    species: "Perro",
    sound: "Guau",
    makeSound: function() {
        console.log(this.sound);
    }
};
const dog = Object.create(animal);
dog.name = "Rex";
dog.makeSound(); // "Guau"

// Accediendo a propiedades de un objeto
console.log(dog.species); // "Perro"
console.log(dog.sound); // "Guau"

// Modificando propiedades de un objeto
dog.sound = "Woof";
console.log(dog.sound); // "Woof"


// Usando Object.keys() para obtener las claves de un objeto
const keys = Object.keys(person);
console.log(keys); // ["name", "age", "nationality"]

// Usando Object.values() para obtener los valores de un objeto
const values = Object.values(person);
console.log(values); // ["Juan", 31, "Spanish"]

// Usando Object.entries() para obtener pares clave-valor de un objeto
const entries = Object.entries(person);
console.log(entries); // [["name", "Juan"], ["age", 31], ["nationality", "Spanish"]]