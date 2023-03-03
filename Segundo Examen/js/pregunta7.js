function hideDiv() {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    div1.style.opacity = 0;
    setTimeout(function() {
      div1.style.display = "none";
      div2.style.opacity = 1;
    }, 2000);
  }