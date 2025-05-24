// Manejo de eventos en JavaScript

// 1. Registro de eventos usando addEventListener
const button = document.createElement('button');
button.textContent = 'Haz clic aquí';
document.body.appendChild(button);

button.addEventListener('click', function(event) {
    alert('¡Botón clickeado!');
    // Detener la propagación del evento
    event.stopPropagation();
});

// 2. Propagación de eventos (Burbujeo y Captura)
const outerDiv = document.createElement('div');
outerDiv.style.border = '2px solid blue';
outerDiv.style.padding = '20px';
outerDiv.textContent = 'Div externo';

const innerDiv = document.createElement('div');
innerDiv.style.border = '2px solid red';
innerDiv.style.padding = '20px';
innerDiv.textContent = 'Div interno';

outerDiv.appendChild(innerDiv);
document.body.appendChild(outerDiv);

// Evento en fase de burbujeo (por defecto)
outerDiv.addEventListener('click', function() {
    alert('Div externo clickeado (burbujeo)');
});

// Evento en fase de captura
innerDiv.addEventListener('click', function(event) {
    alert('Div interno clickeado');
    // event.stopPropagation(); // Descomenta para detener la propagación
}, false); // false = burbujeo, true = captura

// 3. Eliminación de eventos
function handleMouseOver() {
    button.textContent = '¡Mouse sobre el botón!';
}
button.addEventListener('mouseover', handleMouseOver);

// Eliminar el evento después de 5 segundos
setTimeout(() => {
    button.removeEventListener('mouseover', handleMouseOver);
    button.textContent = 'Evento mouseover removido';
}, 5000);