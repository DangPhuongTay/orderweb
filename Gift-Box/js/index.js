let box = document.getElementById("box");
box.onclick = function () {
  box.classList.toggle("on");
};

box.onmousemove = function (e) {
  box.style.transform = "rotateX(-30deg) rotateY(" + e.clientX + "deg)";
};
