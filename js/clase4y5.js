/*clase de persona con nombre apellido y edad 
mostrar por consola nombre y apellido (concatenar) y mostrar por alert si es mayor o menor y q retorne true o false*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }


mostrarConsola(){
    console.log(this.nombre +" "+ this.apellido)
}

verificarEdad(){
    if(this.edad >=18){
        alert("es mayor");
    }else{
        alert("No es mayor");
    }

}
}

const cuantasPersonas = parseInt(prompt("Ingrese cuantas personas quiere agregar"))
for( let i = 0; i< cuantasPersonas; i++){
    const nombre = prompt ("ingrese el nombre" + (i + 1))
    const apellido = prompt("ingrese el apellido" + (i + 1))
    const edad = prompt ("ingrede la edad" + (i+1))

    const objeto = new Persona(nombre, apellido,edad);

    objeto.mostrarConsola()
}