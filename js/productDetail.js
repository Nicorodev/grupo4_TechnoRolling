

const showProductId = () => {
  const productId = JSON.parse(localStorage.getItem("productId"));
  const producto = listaProductos.find((producto) => producto.id === productId);
  console.log(producto);
  return producto
};

// showProductId();

// /* renderizarProductos*/

// const renderizarProducto = (producto) => {
//   const { id, nombre, imagen, precio, stock,descripcion } = producto;

//   return /* HTML*/` <section class="detalleProducto" >
//                 <div class="conteiner_image">
//                   <img src="${imagen}" alt="imagenProduct">                  
//                 </div>
//                     <div class="detalleDescripcion">
//                       <h1>${nombre}</h1>
//                         <h3>${descripcion}</h3>
//                        <p>Cantidad en stock: <span id="span">${stock} </span></p>
//                        <p>Categoria: <span id="span"></span></p>
//                         <div class="precio">
//                           <p>$<span>${precio}</span></p>
//                           <button class="comprar">COMPRAR</button>
//                         </div>
//                         <div class="envios">
//                           <i  class='bx bxs-truck bx-lg'></i>
//                           <h3>Envios a todo el pais</h3>
//                         </div>
//                     </div>
//            <div id="id"></div>
//           </section>`


// renderizarProducto()

const renderProduct = () => {
    const defaultImgPath = '';
    const product = showProductId();
    const productIdHTML = document.getElementById('productId');

productIdHTML.innerHTML += `
<section class="detalleProducto">
                <div class="conteiner_image">
                  <img src="${product.imagen}" alt="imagenProduct">                  
                </div>
                    <div class="detalleDescripcion">
                      <h1>${product.nombre}</h1>
                        <h3>${product.descripcion}</h3>
                       <p>Cantidad en stock: <span id="span"> ${product.stock}</span></p>
                       <p>Categoria: <span id="span">${product.categoria}</span></p>
                        <div class="precio">
                          <p>$<span>${product.precio}</span></p>
                          <button class="comprar" src="">COMPRAR</button>
                        </div>
                        <div class="envios">
                          <i  class='bx bxs-truck bx-lg'></i>
                          <h3>Envios a todo el pais</h3>
                        </div>
                    </div>
          </section>`
     
};

renderProduct();

