var filas = document.querySelectorAll('#tabla1 tr');

// Agregar evento a cada fila de la primer tabla
filas.forEach(function(fila) {
    fila.addEventListener('click', function() {
        // Cambiar clase de la fila seleccionada
        fila.classList.toggle('seleccionado');
    });
});