const botonMenuHamburguesa = document.querySelector("#button-open-menu")
const menuDesplegable = document.querySelector(".nav-bar__mquery--open")
const botonCerrarMenuDesplegaable = document.querySelector(".close-menu")

menuDesplegable.classList.add("off")

botonMenuHamburguesa.onclick = () => {
    menuDesplegable.classList.remove("off")
    botonMenuHamburguesa.classList.add("off")

}

botonCerrarMenuDesplegaable.onclick = () => {
    menuDesplegable.classList.add("off")
    botonMenuHamburguesa.classList.remove("off")

}