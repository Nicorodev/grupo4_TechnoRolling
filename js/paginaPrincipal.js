let productosRow = document.querySelector('.row');
let searchInput = document.querySelector('#search'); // Suponiendo que tienes un input con este ID para buscar
let mensajeNoProductos = document.createElement('p'); // Creamos un elemento <p> para mostrar el mensaje
let verMas = document.querySelector('.verMas');

mensajeNoProductos.textContent = "No hay productos relacionados";
mensajeNoProductos.style.display = 'none'; // Ocultamos el mensaje por defecto
mensajeNoProductos.style.color = 'red'; // Puedes estilizar el mensaje como prefieras
productosRow.parentElement.appendChild(mensajeNoProductos); // Añadimos el mensaje al DOM, debajo del contenedor de productos

const crearProductos = (productos) => {
  const { id, nombre, imagen, precio } = productos;

  return /* html */`
        <div class="col">
          <div class="card">
              <div class="container-IMG">
              <img src="${imagen}" class="card-img-top" alt="user" />
              </div>
              <div class="card-body">
                  <h5 class="card-title">${nombre}</h5>
                  <p class="card-text">$ ${precio}</p>
                  <a href="#" class="btn btn-primary" data-id="${id}">VER PRODUCTO</a>
              </div>
          </div>
        </div>`;
};

const renderizarProductos = (listaDeProductos) => {
  productosRow.innerHTML = listaDeProductos.map(crearProductos).join('');
};

/*FILTRAR PRODUCTOS  */
const filtrarProductos = (termino) => {
  const terminoLower = termino.toLowerCase();
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(terminoLower) ||
    producto.categoria.toLowerCase().includes(terminoLower)
  );
  if (productosFiltrados.length === 0) {
    mensajeNoProductos.style.display = 'block'; // Mostramos el mensaje
    productosRow.innerHTML = ''; // Limpiamos el contenedor de productos
  } else {
    mensajeNoProductos.style.display = 'none'; // Ocultamos el mensaje si hay productos
    renderizarProductos(productosFiltrados);
  }
};
searchInput.addEventListener('input', (e) => {
  filtrarProductos(e.target.value);
});




/*MOSTRAR MAS PRODUCTOS */
let aumentarLimite = () => {
   limiteDeProductos.productosIndex += 1;
   let {productos, productosIndex} = limiteDeProductos
   renderizarProductos(productos.slice(0, productosIndex).flat());
    
}
const iniciar = () => {
  renderizarProductos(limiteDeProductos.productos[0]);
  verMas.addEventListener('click', aumentarLimite);
};

iniciar();
