// // Selección de elementos del DOM
// const productosRow = document.querySelector('.row');
// const verMas = document.querySelector('.verMas');
// const search = document.getElementById('#search');
// // Creación y estilización del mensaje de "No hay productos"
// const mensajeNoProductos = document.createElement('p');
// // mensajeNoProductos.textContent = "No hay productos relacionados";
// // mensajeNoProductos.style.display = 'none';
// // mensajeNoProductos.style.color = 'red';

// // Añadir el mensaje al DOM
// productosRow.parentElement.appendChild(mensajeNoProductos);

// // Función para crear el HTML de un producto
// const crearProductoHTML = ({ id, nombre, imagen, precio }) => `
//   <div class="col">
//     <div class="card">
//       <div class="container-IMG">
//         <img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}" />
//       </div>
//       <div class="card-body">
//         <h5 class="card-title">${nombre}</h5>
//         <p class="card-text">$ ${precio}</p>
//         <button class="btn btn-primary" onclick="setProductId(${id})">VER PRODUCTO</button>
//       </div>
//     </div>
//   </div>
// `;

// // Función para guardar el ID del producto y redirigir a la página de detalles
// const setProductId = (id) => {
//   localStorage.setItem('productId', JSON.stringify(id));
//   window.location.href = '../pages/detalleDeProducto.html';
// };

// // Función para renderizar la lista de productos
// const renderizarProductos = (productos) => {
//   if (productos.length === 0) {
//     mensajeNoProductos.style.display = 'block';
//     productosRow.innerHTML = '';
//   } else {
//     mensajeNoProductos.style.display = 'none';
//     productosRow.innerHTML = productos.map(crearProductoHTML).join('');
//   }
// };

// // Función para mostrar más productos
// const aumentarLimite = () => {
//   const { productos, productosIndex } = limiteDeProductos;
//   limiteDeProductos.productosIndex += 1;
//   renderizarProductos(productos.slice(0, productosIndex + 1).flat());
// };



// // Inicializar la página
// const iniciar = () => {
//   renderizarProductos(limiteDeProductos.productos[0]);
//   verMas.addEventListener('click', aumentarLimite);
// };

// iniciar();

// Selección de elementos del DOM
const productosRow = document.querySelector('.row');
const verMas = document.querySelector('.verMas');
const searchInput = document.getElementById('search');

// Creación y estilización del mensaje de "No hay productos"
const mensajeNoProductos = document.createElement('p');
mensajeNoProductos.textContent = "No hay productos relacionados";
mensajeNoProductos.style.display = 'none';
mensajeNoProductos.style.color = 'red';

// Añadir el mensaje al DOM
productosRow.parentElement.appendChild(mensajeNoProductos);

// Función para crear el HTML de un producto
const crearProductoHTML = ({ id, nombre, imagen, precio }) => `
  <div class="col">
    <div class="card">
      <div class="container-IMG">
        <img src="${imagen}" class="card-img-top" alt="Imagen de ${nombre}" />
      </div>
      <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">$ ${precio}</p>
        <button class="btn btn-primary" onclick="setProductId(${id})">VER PRODUCTO</button>
      </div>
    </div>
  </div>
`;

// Función para guardar el ID del producto y redirigir a la página de detalles
const setProductId = (id) => {
  localStorage.setItem('productId', JSON.stringify(id));
  window.location.href = '../pages/detalleDeProducto.html';
};

// Función para renderizar la lista de productos
const renderizarProductos = (productos) => {
  if (productos.length === 0) {
    mensajeNoProductos.style.display = 'block';
    productosRow.innerHTML = '';
  } else {
    mensajeNoProductos.style.display = 'none';
    productosRow.innerHTML = productos.map(crearProductoHTML).join('');
  }
};

// Función para filtrar productos por nombre o categoría
const filtrarProductos = (termino) => {
  const terminoLower = termino.toLowerCase();
  const productosFiltrados = listaProductos.filter(({ nombre, categoria }) =>
    nombre.toLowerCase().includes(terminoLower) ||
    categoria.toLowerCase().includes(terminoLower)
  );

  renderizarProductos(productosFiltrados);
};

// Evento de búsqueda
searchInput.addEventListener('input', (e) => filtrarProductos(e.target.value));

// Función para mostrar más productos
const aumentarLimite = () => {
  const { productos, productosIndex } = limiteDeProductos;
  limiteDeProductos.productosIndex += 1;
  renderizarProductos(productos.slice(0, productosIndex + 1).flat());
};

// Inicializar la página
const iniciar = () => {
  renderizarProductos(limiteDeProductos.productos[0]);
  verMas.addEventListener('click', aumentarLimite);
};

iniciar();
