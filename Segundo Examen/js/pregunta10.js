const btnHeader = document.getElementById("btnHeader");
const btnBody = document.getElementById("btnBody");

btnHeader.addEventListener("click", () => {
  alert(document.head.innerHTML);
});

btnBody.addEventListener("click", () => {
  alert(document.body.innerHTML);
});