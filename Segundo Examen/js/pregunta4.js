function comprobarOrden() {
    let numero1, numero2;
    do {
      numero1 = prompt("Por favor escriba el primer número:");
      numero2 = prompt("Por favor escriba el segundo número:");
      if (numero1 > numero2) {
        alert("Error el primer número es mayor que el segundo. Por favor, inténtelo de nuevo.");
      }
    } while (numero1 > numero2);
    alert("Enhorabuena Los números están en orden creciente.");
  }