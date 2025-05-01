// Ejemplo de if-else
let age = Number(prompt("Ingrese su edad:"));
if (age < 18) {
    console.log("Eres menor de edad.");
}
else if (age >= 18 && age < 65) {
    console.log("Eres adulto.");
}
else {
    console.log("Eres mayor de edad.");
}


// Ejemplo de if-else anidado
let score = Number(prompt("Ingrese su puntaje:"));
if (score >= 90) {
    console.log("Excelente");
}
else if (score >= 80) {
    console.log("Muy bien");
}
else if (score >= 70) {
    console.log("Bien");
}
else if (score >= 60) {
    console.log("Suficiente");
}
else {
    console.log("Insuficiente");
}


// Ejemplo de operador ternario
let isAdult = (age >= 18) ? "Eres adulto." : "Eres menor de edad.";
console.log(isAdult);

// Ejemplo de operador lógico AND
let isStudent = true; // Cambia a false si no es estudiante
let hasDiscount = (isStudent && age < 25) ? "Tienes descuento." : "No tienes descuento.";
console.log(hasDiscount);


// Ejemplo de operador lógico OR
let isMember = false; // Cambia a true si es miembro
let hasAccess = (isMember || age >= 18) ? "Tienes acceso." : "No tienes acceso.";
console.log(hasAccess);


// Ejemplo de operador NOT
let isLoggedIn = false; // Cambia a true si está logueado
let accessMessage = (!isLoggedIn) ? "Debes iniciar sesión." : "Bienvenido de nuevo.";
console.log(accessMessage);



// Ejemplo de switch-case
let color = prompt("Ingrese un color (rojo, verde, azul):");
switch (color) {
    case "rojo":
        console.log("El color es rojo.");
        break;
    case "verde":
        console.log("El color es verde.");
        break;
    case "azul":
        console.log("El color es azul.");
        break;
    default:
        console.log("Color no reconocido.");
        break;
}


let num1 = Number(prompt("Ingrese primer número:"));
let num2 = Number(prompt("Ingrese segundo número:"));
let operation = prompt("¿Qué operación desea? (suma, resta, multiplicacion, division)");

let result;

if (operation === "suma") {
  result = num1 + num2;
} else if (operation === "resta") {
  result = num1 - num2;
} else if (operation === "multiplicacion") {
  result = num1 * num2;
} else if (operation === "division") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "No se puede dividir por cero.";
  }
} else {
  result = "Operación inválida.";
}

console.log("Resultado:", result);


// Ejemplo de switch
let day = Number(prompt("Ingrese un número entre 1 y 7:"));
let dayName;

switch (day) {
    case 1:
        dayName = "Lunes";
        break;
    case 2:
        dayName = "Martes";
        break;
    case 3:
        dayName = "Miércoles";
        break;
    case 4:
        dayName = "Jueves";
        break;
    case 5:
        dayName = "Viernes";
        break;
    case 6:
        dayName = "Sábado";
        break;
    case 7:
        dayName = "Domingo";
        break;
    default:
        dayName = "Número inválido. Debe ser entre 1 y 7.";
        break;
}

console.log("Día de la semana:", dayName);


// Ejemplo de bucle for
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}


// Ejemplo de bucle while
let count = 1;
while (count <= 5) {
    console.log("Contando:", count);
    count++;
}


// Ejemplo de bucle do-while
let countDown = 5;
do {
    console.log("Cuenta regresiva:", countDown);
    countDown--;
}
while (countDown > 0);
console.log("¡Despegue!");


// Ejemplo de bucle forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log("Número en el array:", number);
});


// Ejemplo de bucle for...of
let fruits = ["manzana", "banana", "naranja"];
for (let fruit of fruits) {
    console.log("Fruta:", fruit);
}


// Ejemplo de bucle for...in
let person = { name: "Juan", age: 30, city: "Madrid" };
for (let key in person) {
    console.log(key + ":", person[key]);
}


// Ejemplo de break y continue
let numbers2 = [1, 2, 3, 4, 5];
for (let number of numbers2) {
    if (number === 3) {
        console.log("Número encontrado, saliendo del bucle.");
        break; // Sale del bucle al encontrar el número 3
    }
    if (number % 2 === 0) {
        console.log("Número par, saltando.");
        continue; // Salta el número par y continúa con el siguiente
    }
    console.log("Número impar:", number);
}


// Ejemplo de try-catch

let numOne = Number(prompt("Ingrese primer número:"));
let numTwo = Number(prompt("Ingrese segundo número:"));
try {
    let result2 = num1 / num2; // Puede dar error si num2 es 0
    console.log("Resultado de la división:", result2);
}
catch (error) {
    console.error("Error:", error.message); // Manejo del error
}
