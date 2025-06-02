/**
 * Suma dos números (función pura).
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

add(2, 3); // 5


/**
 * Devuelve una copia de un array con todos los elementos multiplicados por un factor (función pura).
 * @param {number[]} arr 
 * @param {number} factor 
 * @returns {number[]}
 */
function multiplyArray(arr, factor) {
    return arr.map(x => x * factor);
}

multiplyArray([1, 2, 3], 2); // [2, 4, 6]


/**
 * Devuelve si una cadena es palíndromo (función pura).
 * @param {string} str 
 * @returns {boolean}
 */
function isPalindrome(str) {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalized === normalized.split('').reverse().join('');
}

// Ejemplos de uso

isPalindrome('Anita lava la tina'); // true

isPalindrome('Hola mundo'); // false