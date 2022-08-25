const productos = [
    {
        id: 1,
        modelo: "Mate",
        precio: 1400,
        imagen: "./img/MatePersonalizado.jpeg"
    },
    {
        id: 2,
        modelo: "Ilustracion",
        precio: 1500,
        imagen: "./img/IlustraciónPersonalizada.jpeg"
    },
    {
        id: 3,
        modelo: "Print",
        precio: 1200,
        imagen: "./img/PrintPErsonalizado.jpeg"
    },
    {
        id: 4,
        modelo: "Cuadro",
        precio: 2000,
        imagen: "./img/CuadroPersonalizado.jpeg"
    },
    {
        id: 5,
        modelo: "Mini Bastidor",
        precio: 1900,
        imagen: "./img/MiniBastidorPersonalizado.jpeg"
    },
];


let carrito = [];
const moneda = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

function renderizarProductos() {
    productos.forEach((info) => {
        // Estructura de tarjetas con Bootstrap
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'col-sm-4', 'bg-light', 'border-dark', 'text-center');

        const tarjetaBody = document.createElement('div');
        tarjetaBody.classList.add('card-body');
        
        const tarjetaTitle = document.createElement('h4');
        tarjetaTitle.classList.add('card-title', 'text-center');
        tarjetaTitle.textContent = info.modelo;
        
        const tarjetaImage = document.createElement('img');
        tarjetaImage.classList.add('img-fluid');
        tarjetaImage.setAttribute('src', info.imagen);
        
        const tarjetaPrice = document.createElement('p');
        tarjetaPrice.classList.add('card-text', 'text-center');
        tarjetaPrice.textContent = `${info.precio}${moneda}`;
        
        const tarjetaBtn = document.createElement('button');
        tarjetaBtn.classList.add('btn', 'btn-light');
        tarjetaBtn.textContent = 'Agregar';
        tarjetaBtn.setAttribute('marcador', info.id);
        tarjetaBtn.addEventListener('click', addProductoAlCarrito);
        
        //Se agrega el contenido
        tarjetaBody.appendChild(tarjetaImage);
        tarjetaBody.appendChild(tarjetaTitle);
        tarjetaBody.appendChild(tarjetaPrice);
        tarjetaBody.appendChild(tarjetaBtn);
        tarjeta.appendChild(tarjetaBody);
        DOMitems.appendChild(tarjeta);
    });
}

//Sumar productos al carriyo
function addProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    updateCarrito();
}

//Se defince la funcion para actualizar el carrito
function updateCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    carritoSinDuplicados.forEach((item) => {
        const myItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const myNode = document.createElement('li');
        myNode.classList.add('list-group-item', 'text-right', 'mx-2');
        myNode.textContent = `${numeroUnidadesItem} x ${myItem[0].modelo} - ${myItem[0].precio}${moneda}`;

        // Boton para borrar
        const myBtn = document.createElement('button');
        myBtn.classList.add('btn', 'mx-5');
        myBtn.textContent = 'Eliminar';
        myBtn.style.marginLeft = '1rem';
        myBtn.dataset.item = item;
        myBtn.addEventListener('click', deleteItemCarrito);

        
        myNode.appendChild(myBtn);
        DOMcarrito.appendChild(myNode);
    });
    
    //Calculamos el total
    DOMtotal.textContent = calcularTotal();
}

//Borrar items del carrito
function deleteItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    updateCarrito();
}

//Precio total con productos repetidos
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = productos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function emptyCarrito
() {
    carrito = [];
    updateCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', emptyCarrito
);

// Inicio
renderizarProductos();
updateCarrito();