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


//                         si no es nulo lo parsea y guarda   si es falsy retorna el array

//Funcion botones comprar
let btnMate = document.getElementById("mateBtn")
btnMate.addEventListener("click", respuestaCompraMate)

function respuestaCompraMate() {
    console.log(articulos[0]);
    carrito.push(articulos[0])
}

let btnIlus = document.getElementById("ilusBtn")
btnIlus.addEventListener("click", respuestaCompraIlus)

function respuestaCompraIlus() {
    console.log(articulos[1]);
    carrito.push(articulos[1])
}

let btnPrint = document.getElementById("printBtn")
btnPrint.addEventListener("click", respuestaCompraPrint)

function respuestaCompraPrint() {
    console.log(articulos[2]);
    carrito.push(articulos[2])
}

let btnCuadro = document.getElementById("cuadroBtn")
btnCuadro.addEventListener("click", respuestaCompraCuadro)

function respuestaCompraCuadro() {
    console.log(articulos[3]);
    carrito.push(articulos[3])
}

let btnMiniB = document.getElementById("miniBBtn")
btnMiniB.addEventListener("click", respuestaCompraMiniB)

function respuestaCompraMiniB() {
    console.log(articulos[4]);
    carrito.push(articulos[4])
}

//Funcion carrito
let btnCarrito = document.getElementById("carrito")
btnCarrito.addEventListener("click", respuestaCarrito)

function respuestaCarrito() {
    console.log(carrito)
}

const carrito = JSON.parse(localStorage.getItem("carrito")) || []

let btnVaciar = document.getElementById("boton-vaciar")

btnVaciar.addEventListener('click', function () {
    Swal.fire({
        title: 'Estas seguro que deseas eliminar?',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado',
                'Se eliminó tu carrito :(',
                'success'
            )
        }
    })
})


//localStorage.clear()

//Suma carrito:
const suma = (a, b) => (a + b)
