// let cuerpoTabla = document.querySelector("tbody");


// function crearTabla (){

//     let tabla = JSON.parse(localStorage.getItem("productId")) || [];

//     /* RECORRER EL ARRAY */
//     tabla.map((product) => {

//         let tr = document.createElement("tr");

//         let celdas =/*HTML */ `
//              <td></td>${product.imagen}</td>
//              <td></td>${product.descripcion}</td>
//              <td></td>${product.nombre}</td>
//              <td></td>${product.stock}</td>
//              <td></td>${product.precio}</td>
//              <td></td>${product.categoria}</td>
//              <td></td>${product.id}</td>
//              <td></td>
//         `
//           tr.innerHTML=celdas
//           cuerpoTabla.append(tr)
         
//         // let tdId = document.createElement("td");
//         // let tdNombre = document.createElement("td");
//         // let tdImagen = document.createElement("td");
//         // let tdPrecio = document.createElement("td");
//         // let tdStock = document.createElement("td");
//         // let tdDescripcion = document.createElement("td");
//         // let tdEliminar = document.createElement("td");
//         // let tdEditar = document.createElement("td");
//     })
// }