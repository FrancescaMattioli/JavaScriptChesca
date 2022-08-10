//Uso de array
const articulos = [{id:1, articulo:"Mate", precio:+1400},{id:2, articulo:"Ilustracion", precio:+1500}]

//Uso de Ciclo y Condicional
let producto
let precioMate = +1400
let precioIlus = +1500

do{
    producto = prompt("Ingrese el nombre del producto que desea agregar al carrito (mate/ilustración), escriba 'Salir' para salir");

if (producto == "mate"){
    alert ("Ingresaste un mate")
    console.log(articulos.slice(0,1))
}else if  (producto == "ilustracion"){
    alert ("Ingresaste una ilustración")
    console.log(articulos.slice(1,2))
}else if (producto== "salir"){
    alert("Nos vemos!")
}else {
    alert ("Ingrese un valor válido (mate / ilustracion / salir)")
}

}while(producto!="salir") 

//Sumo si se agrega el articulo
const suma = (a, b) => (a + b)

let total = suma (precioIlus, precioMate)

if (total !== 0){
    console.log(total);
}