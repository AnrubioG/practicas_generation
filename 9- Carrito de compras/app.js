let productos = [
  {
    id: 1,
    nombre: "manzana",
    unidades: 5,
    precio: 500,
  },
  {
    id: 2,
    nombre: "bananos",
    unidades: 7,
    precio: 800,
  },
  {
    id: 3,
    nombre: "zanahoria",
    unidades: 5,
    precio: 1000,
  },
];

let carrito = [];

//console.log(productos[0].nombre);

function mostrarProductos(productos) {
  //alert("¿Deseas ver los productos disponibles?");
  console.log("Los productos que tenemos disponibles son: ");
  for (const producto of productos) {
    console.log(
      "id: " +
        producto.id +
        " - " +
        producto.nombre +
        " - Cantidad disponible: " +
        producto.unidades +
        " - Precio: " +
        producto.precio
    );
  }
}

function agregarProductos(productos) {
  mostrarProductos(productos);
  let productoSeleccionado = parseInt(prompt("Ingresa el id del producto que desees agregar "));
  let cantidadSeleccionada = parseInt(prompt("Ingresa la cantidad del producto que desees agregar"));
  let seleccionCliente = {
    producto: "",
    cantidad: cantidadSeleccionada,
    subtotal: 0,
  };

  switch (productoSeleccionado) {
    case 1:
      seleccionCliente.producto = productos[0].nombre;
      seleccionCliente.subtotal = productos[0].precio * seleccionCliente.cantidad;
      productos[0].unidades -= seleccionCliente.cantidad;
      break;
    case 2:
      seleccionCliente.producto = productos[1].nombre;
      seleccionCliente.subtotal = productos[1].precio * seleccionCliente.cantidad;
      productos[1].unidades -= seleccionCliente.cantidad;
      break;
    case 3:
      seleccionCliente.producto = productos[2].nombre;
      seleccionCliente.subtotal = productos[2].precio * seleccionCliente.cantidad;
      productos[2].unidades -= seleccionCliente.cantidad;
      break;
    default:
      alert("Haz ingresado un producto que no está disponible, deseas continuar con la compra?")
        
  }

  carrito.push(seleccionCliente);

  if (
    confirm(
      `Se ha agregado exitosamente  ${seleccionCliente.cantidad} ${seleccionCliente.producto} por un total de ${seleccionCliente.subtotal} ¿Desea agregar otro producto?`
    )
  ) {
    agregarProductos(productos);
  }
  console.log(seleccionCliente);
}

agregarProductos(productos);
