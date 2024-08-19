// // Selección del cuerpo de la tabla
// let cuerpoTabla = document.querySelector("tbody");

// function crearTabla(listaProductos) {
//   // Limpiar el contenido de la tabla antes de rellenarla
//   cuerpoTabla.innerHTML = '';

//   // Iterar sobre cada producto en el array
//   listaProductos.forEach(product => {
//     // Crear una nueva fila
//     const tr = document.createElement('tr');

//     // Crear las celdas de la fila con los datos del producto
//     const celdas = `
//       <td>${listaProductos.nombre}</td>
//       <td>${product.descripcion}</td>
//       <td>${product.stock}</td>
//       <td>${product.precio}</td>
//       <td>${product.categoria}</td>
//       <td>${product.id}</td>
//       <td><button data-id="${product.id}">Eliminar</button></td>
//       <td><button data-id="${product.id}">Editar</button></td>
//     `;

//     // Asignar las celdas a la fila
//     tr.innerHTML = celdas;

//     // Añadir la fila al cuerpo de la tabla
//     cuerpoTabla.appendChild(tr);
//   });
// }

// // Ejemplo de uso con el array de productos
// const listaProductos = [
//   { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', stock: 10, precio: 100, categoria: 'Categoría 1' },
//   // Agregar más productos según sea necesario
// ];

// // Llamada a la función para crear la tabla
// crearTabla(listaProductos);


let cuerpoTabla = document.querySelector("tbody");

function crearTabla (){
    
}