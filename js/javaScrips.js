//Uso de Ciclo y Condicional
let producto
do{
    producto = prompt("Ingrese el nombre del producto que desea agregar al carrito (mate/ilustración), use ESC para salir");
}while(producto!="ESC")

    if (producto == "mate") {
        alert("Agregaste un Mate")
    } else if (producto == "ilustracion") {
        alert("Agregaste una ilustración")
    } else {
        alert("Ingrese Mate o Ilustración")
}
//Suponiendo que se agrega una ilustración y un mate"

const suma = (a, b) => (a + b)

let precioMate = 1400
let precioIlus = 1500

let precioFinal = suma(precioIlus, precioMate)
console.log(precioFinal)