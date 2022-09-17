//Array productos
const articulos = [
    {
        id: 1,
        nombre: 'Mate Personalizado',
        precio: 1400,
        imagen: './img/MatePersonalizado.jpeg'
    },
    {
        id: 2,
        nombre: 'Ilustración Personalizada',
        precio: 1500,
        imagen: './img/IlustraciónPersonalizada.jpeg'
    },
    {
        id: 3,
        nombre: 'Print Personalizado',
        precio: 1200,
        imagen: './img/PrintPersonalizado.jpeg'
    },
    {
        id: 4,
        nombre: 'Cuadro Personalizado',
        precio: 2000,
        imagen: './img/CuadroPersonalizado.jpeg'
    },
    {
        id: 5,
        nombre: 'Mini Bastidor Personalizado',
        precio: 1900,
        imagen: './img/MiniBastidorPersonalizado.jpeg'
    }

];

let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#btn-vaciar');
const miLocalStorage = window.localStorage;
// Funciones

// Crea las tarjs de prods. en html.
function renderizarProductos() {
    articulos.forEach((info) => {
        
        const crear = document.createElement('div');
        crear.classList.add('card', 'col-sm-4');
        
        const crearCardBody = document.createElement('div');
        crearCardBody.classList.add('card-body');
        
        const crearTitle = document.createElement('h5');
        crearTitle.classList.add('card-title');
        crearTitle.textContent = info.nombre;
        
        const crearImagen = document.createElement('img');
        crearImagen.classList.add('img-fluid');
        crearImagen.setAttribute('src', info.imagen);
        
        const crearPrecio = document.createElement('p');
        crearPrecio.classList.add('card-text');
        crearPrecio.textContent = `${info.precio}${moneda}`;
        
        const crearBoton = document.createElement('button');
        crearBoton.classList.add('btn', 'btn-primary');
        crearBoton.textContent = '+';
        crearBoton.setAttribute('marcador', info.id);
        crearBoton.addEventListener('click', añadirAlCarrito);
        // Crear todo
        crearCardBody.appendChild(crearImagen);
        crearCardBody.appendChild(crearTitle);
        crearCardBody.appendChild(crearPrecio);
        crearCardBody.appendChild(crearBoton);
        crear.appendChild(crearCardBody);
        DOMitems.appendChild(crear);
    });
}

//Añadir prods. al carrito
function añadirAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();
    guardarCarritoEnLocalStorage();

}

/**
 * Dibuja todos los productos guardados en el carrito
 */
function renderizarCarrito() {
    // Vaciar todo el html
    DOMcarrito.textContent = '';
    // Sacar duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = articulos.filter((itemArticulos) => {
            // ¿Coincide las id? Solo puede existir un caso
            return itemArticulos.id === parseInt(item);
        });
        // Cantidad de mismo prod agregado
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${moneda}`;
        // Borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    // Precio total en el html
    DOMtotal.textContent = calcularTotal();
}

//Para borrar un articulo del carrito (mediante id)
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    renderizarCarrito();
    guardarCarritoEnLocalStorage();
}

//Cálculo del total
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = articulos.filter((itemArticulos) => {
            return itemArticulos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}

//Vaciar carrito y sweet alert
function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    localStorage.clear();
}

let botonVaciar = document.getElementById("btn-vaciar")

botonVaciar.addEventListener('click', function () {
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

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();
