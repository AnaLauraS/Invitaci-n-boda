//  seleccionamos los dos elementos que serán clickables
const toggleButton = document.getElementById("button-menu");
const navWrapper = document.getElementById("nav");
const cerrar = document.querySelector(".fa-times");
const barra = document.querySelector(".fa-bars");

/* 
  cada ves que se haga click en el botón 
  agrega y quita las clases necesarias 
  para que el menú se muestre.
*/
toggleButton.addEventListener("click", () => {
    if (barra.getAttribute('style')=='display:block;') {
  navWrapper.classList.toggle("show");
  barra.setAttribute('style','display:none;');
  cerrar.setAttribute('style','display:block;');
  navWrapper.setAttribute('style','transition-delay:0s');
    } else {
        navWrapper.classList.remove("show");
    barra.setAttribute('style','display:block;');
    cerrar.setAttribute('style','display:none;');
    }
});

// cuando clickea un enlace, saca la nav
navWrapper.addEventListener("click", () => {
    navWrapper.classList.remove("show");
    barra.setAttribute('style','display:block;');
    cerrar.setAttribute('style','display:none;');
    navWrapper.setAttribute('style','transition-delay:0.3s');
})

/* 
  Cuándo se haga click fuera del contenedor de enlaces 
  el menú debe esconderse.
*/
navWrapper.addEventListener("click", e => {
  if (e.target.id === "nav") {
    navWrapper.classList.remove("show");
    barra.setAttribute('style','display:block;');
    cerrar.setAttribute('style','display:none;');
  }
});