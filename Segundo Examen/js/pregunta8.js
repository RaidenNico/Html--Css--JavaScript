const lista = document.getElementById("mi-lista");
lista.querySelectorAll("li").forEach(function (li) {
  li.addEventListener("click", function () {
    this.style.display = "none";
  });
});
