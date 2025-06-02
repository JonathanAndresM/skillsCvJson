// Ejemplo de Object Composition en JavaScript

// Comportamientos simples
const canWalk = (state) => ({
    walk: () => console.log(`${state.name} está caminando`)
});

const canEat = (state) => ({
    eat: () => console.log(`${state.name} está comiendo`)
});

const canSwim = (state) => ({
    swim: () => console.log(`${state.name} está nadando`)
});

// Composición de objetos complejos
const Person = (name) => {
    const state = { name };
    return {
        ...canWalk(state),
        ...canEat(state)
    };
};

const Fish = (name) => {
    const state = { name };
    return Object.assign(
        {},
        canSwim(state),
        canEat(state)
    );
};

// Uso
const john = Person('John');
john.walk(); // John está caminando
john.eat();  // John está comiendo

const nemo = Fish('Nemo');
nemo.swim(); // Nemo está nadando
nemo.eat();  // Nemo está comiendo


// Composición de objetos complejos con herencia
const Animal = (name) => {
    const state = { name };
    return Object.assign(
        {},
        canWalk(state),
        canEat(state)
    );
};
const Bird = (name) => {
    const state = { name };
    return Object.assign(
        {},
        Animal(name),
        {
            fly: () => console.log(`${state.name} está volando`)
        }
    );
};
const eagle = Bird('Eagle');
eagle.walk(); // Eagle está caminando
eagle.eat();  // Eagle está comiendo
eagle.fly();  // Eagle está volando

// Composición de objetos complejos con herencia y métodos adicionales
const Dog = (name) => {
    const state = { name };
    return Object.assign(
        {},
        Animal(name),
        {
            bark: () => console.log(`${state.name} está ladrando`)
        }
    );
};
const rover = Dog('Rover');
rover.walk(); // Rover está caminando
rover.eat();  // Rover está comiendo
rover.bark(); // Rover está ladrando
