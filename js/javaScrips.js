//Array articulos
const articulos = [{
    id: 1,
    articulo: "Mate",
    precio: +1400
}, {
    id: 2,
    articulo: "Ilustracion",
    precio: +1500
}, {
    id: 3,
    articulo: "Print",
    precio: +1200
}, {
    id: 4,
    articulo: "Cuadro",
    precio: +2000
}, {
    id: 5,
    articulo: "MiniBastidor",
    precio: +1900
}]

//Funcion botones comprar
let btnMate = document.getElementById("mateBtn")
btnMate.addEventListener("click", respuestaCompraMate)
function respuestaCompraMate() {
    console.log(articulos[0]);
}

let btnIlus = document.getElementById("ilusBtn")
btnIlus.addEventListener("click", respuestaCompraIlus)
function respuestaCompraIlus() {
    console.log(articulos[1]);
}

let btnPrint = document.getElementById("printBtn")
btnPrint.addEventListener("click", respuestaCompraPrint)
function respuestaCompraPrint() {
    console.log(articulos[2]);
}

let btnCuadro = document.getElementById("cuadroBtn")
btnCuadro.addEventListener("click", respuestaCompraCuadro)
function respuestaCompraCuadro() {
    console.log(articulos[3]);
}

let btnMiniB = document.getElementById("miniBBtn")
btnMiniB.addEventListener("click", respuestaCompraMiniB)
function respuestaCompraMiniB() {
    console.log(articulos[4]);
}

//Funcion carrito
let btnCarrito = document.getElementById("carrito")
btnCarrito.addEventListener("click", respuestaCarrito)
function respuestaCarrito() {
    console.log("Tu carrito: ");
}

//Suponiendo la compra de 1 ilustracion y 1 print:
/*const suma = (a, b) => (a + b)

let totalCarrito = suma(articulos[1].precio, articulos[2].precio)

if (totalCarrito !== 0) {
    console.log(totalCarrito);
}*/

//No se como hacer que al apretar el carrito sume los pedidos que se crean en la consola. Y que luego muestre el totalCarrito.
