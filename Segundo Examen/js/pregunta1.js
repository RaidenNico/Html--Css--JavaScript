function compararNumeros() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    if (num1 > num2) {
      document.getElementById("resultado").innerHTML = "El primer numero es mayor que el segundo número.";
    } else if (num2 > num1) {
      document.getElementById("resultado").innerHTML = "El segundo numero es mayor que el primer número.";
    } else {
      document.getElementById("resultado").innerHTML = "Los dos numeros son iguales.";
    }
  }