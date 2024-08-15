// Array para almacenar los productos del carrito
let carrito = [];

// Selecciona todos los botones de "Agregar al carrito"
const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
});

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
    const nombreProducto = event.target.getAttribute('data-nombre');
    const precioProducto = parseFloat(event.target.getAttribute('data-precio'));

    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre: nombreProducto, precio: precioProducto, cantidad: 1 });
    }

    actualizarCarrito();
}

// Función para actualizar la visualización del carrito
function actualizarCarrito() {
    const carritoItems = document.querySelector('.carrito-items');
    carritoItems.innerHTML = '';

    let total = 0;

    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <span>${producto.nombre} (x${producto.cantidad})</span>
            <span>$${(producto.precio * producto.cantidad).toFixed(2)}</span>
        `;
        carritoItems.appendChild(item);

        total += producto.precio * producto.cantidad;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

// Procesar Pago (esta función solo muestra una alerta en este ejemplo)
document.getElementById('procesar-pago').addEventListener('click', function() {
    alert('Procesando pago... Total: $' + document.getElementById('total').textContent);
});
