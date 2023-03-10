var filas = document.querySelectorAll('#tabla1 tr');

// Agregar evento a cada fila de la primer tabla
filas.forEach(function(fila) {
    fila.addEventListener('click', function() {
        
        fila.classList.toggle('seleccionado');
    });
});