// Seleccionar elementos html

const btnComputadores = document.querySelector("#computadores");
const btnEbooks = document.querySelector("#ebooks");
const btnAccesorios = document.querySelector("#accesorios");
const btnMostrarProductos = document.querySelector("#mostrarTodos");
const btnCrearProducto = document.querySelector("#crearProducto");
const informacion = document.querySelector("#informacion");
let productos = [];
let computadores = [];
let ebooks = [];
let accesorios = [];

// ------------------------------ Clases ------------------------------ //

class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadEnStock = cantidad;
  }

    obtenerInformacion() {
      return this
    }
}

class Computador extends Producto {
  constructor(nombre, precio, cantidad, marca) {
    super(nombre, precio, cantidad);
    this.marca = marca;
  }
}

class Ebook extends Producto {
  constructor(nombre, precio, cantidad, autor) {
    super(nombre, precio, cantidad);
    this.autor = autor;
  }
}

// ------------------------------ Crear productos ------------------------------ //

function crearProducto() {
  let tipo = prompt("Ingrese el tipo de producto que desea crear");
  let nuevoProducto;
  if (tipo === "computador") {
    nuevoProducto = new Computador(
      prompt("ingrese el nombre del producto"),
      prompt("ingrese el precio del producto"),
      prompt("ingrese el stock"),
      prompt("ingrese la marca")
    );
    computadores.push(nuevoProducto);
  } else if (tipo === "ebook") {
    nuevoProducto = new Ebook(
      prompt("ingrese el nombre del producto"),
      prompt("ingrese el precio del producto"),
      prompt("ingrese el stock"),
      prompt("ingrese el autor")
    );
    ebooks.push(nuevoProducto);
  } else if (tipo === "accesorios") {
    nuevoProducto = new Producto(
      prompt("ingrese el nombre del producto"),
      prompt("ingrese el precio del producto"),
      prompt("ingrese el stock"),
      prompt("ingrese el autor")
    );
    accesorios.push(nuevoProducto);
  } else {
    alert("gracias");
  }

  let mensajeExito = `<div>
                        <p>Creaste esxitosamente ${tipo}: ${nuevoProducto.nombre}</p>
                    </div>`;
  informacion.innerHTML = mensajeExito;
}

// ------------------------------ Eventos ------------------------------ //

// Botón crear producto
btnCrearProducto.addEventListener("click", () => {
  crearProducto();
});

// Botón mostrar todos los productos

btnMostrarProductos.addEventListener("click", () => {
  productos = [...computadores, ...ebooks, ...accesorios];
  informacion.innerHTML = "";
  productos.forEach((producto) => {
    let itemProductos = `<p>${producto.obtenerInformacion()}</p>`;
    informacion.innerHTML += itemProductos;
  });
});

