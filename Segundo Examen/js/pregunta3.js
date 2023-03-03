function introducirLetraA() {
    let letra;
    do {
      letra = prompt("Por favor, escriba la letra A en mayúsculas:");
      if (letra !== "A") {
        alert("Error: ¡Debe escribir la letra A en mayúsculas!");
      }
    } while (letra !== "A");
    alert("¡Enhorabuena! Ha introducido la letra A correctamente.");
  }