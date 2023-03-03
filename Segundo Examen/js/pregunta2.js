function calcularPrecioTotal() {
    let precio = document.getElementById("precio").value;
    precio = parseFloat(precio);
    let igv = precio * 0.18;
    let precioTotal = precio + igv;
    document.getElementById("resultado").innerHTML = "El precio total de su compra es: $" + precioTotal.toFixed(2);
  }