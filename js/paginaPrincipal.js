// Simulación de productos cargados desde la página de administración

  
  // Función para mostrar productos
  function mostrarProductos(productos) {
    const productList = document.querySelector("#destacados .row");
    productList.innerHTML = ""; // Limpiar contenido previo
  
    productos.forEach((producto) => {
      const productItem = document.createElement("div");
      productItem.classList.add("col");
  
      // Verificar si la imagen está vacía y proporcionar una imagen por defecto
      const imagenProducto = producto.imagen
        ? producto.imagen
        : "https://via.placeholder.com/150"; // Imagen por defecto
  
      productItem.innerHTML = `
        <div class="col">
          <div class="card ">
              <img src="${imagenProducto}" class="card-img-top" alt="${producto.nombre}" />
              <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.categoria}</p>
                  <a href="#" class="btn btn-primary">COMPRAR</a>
              </div>
          </div>
        </div>`;
      productList.appendChild(productItem);
    });
  }
  
  // Mostrar todos los productos destacados al cargar la página
  mostrarProductos(productos);
  
  // Filtrar productos por nombre al realizar la búsqueda
  document.getElementById("form-search").addEventListener("submit", function (e) {
    e.preventDefault();
    const searchTerm = document
      .getElementById("search") // Cambiado de 'searchInput' a 'search'
      .value.trim()
      .toLowerCase();
  
    const productosFiltrados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );
  
    mostrarProductos(productosFiltrados);
  });
  


  