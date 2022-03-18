let Suportrar = 0;
let KlickaBild = document.querySelector(".knapp");
let Klick = document.querySelector(".Klickade");
KlickaBild.addEventListener("click, addClick");

function addClick() {
  Suportrar = Suportrar + 1;
  Klick.innerHtml = "Klickade " + Suportrar;
}
