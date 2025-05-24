/**
 * Ejemplo de manejo de errores usando try, catch y finally en JavaScript
 */

function divide(a, b) {
    try {
        // Intentamos realizar la división
        // Si alguno de los argumentos no es un número, lanzamos un error
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError('Ambos argumentos deben ser números');
        }
        // Si el divisor es cero, lanzamos un error
        // Esto es importante para evitar la división por cero
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        // Realizamos la división
        // Si todo va bien, devolvemos el resultado
        return a / b;
    } catch (error) {
        console.error('Se produjo un error:', error.message);
        // Aquí podrías manejar el error de alguna manera, como mostrar un mensaje al usuario
        // o registrar el error en un sistema de monitoreo
        return null;
    } finally {
        // Este bloque se ejecuta siempre, independientemente de si hubo un error o no
        // Aquí podrías realizar tareas de limpieza o registro
        console.log('Operación de división finalizada.');
    }
}

// Ejemplo de uso
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // null, error handled
console.log(divide('a', 2)); // null, error handled