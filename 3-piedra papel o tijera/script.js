// // ===========================================================

// // Practica Piedra papel o tijera

// // lógica:
// // 1 piedra gana => tijera
// // 2 tijera gana => papel
// // 3 papel gana => piedra

// // ===========================================================

// solicitar que el usuario seleccione la opción con la que desea jugar

// let pedirJuegoUsuario = () => {
//   let opcion = parseInt(prompt("Elije tu juego:  1 para => Piedra, 2 para => Papel y 3 para => Tijera"));

//   if (opcion >= 1 && opcion <= 3) {
//     return opcion;
//   } else {
//     alert("No se ha ingresado una opcion valida, porfavor refresca para volver a empezar");
//   }
// };

// console.log(`Usuario: ${pedirJuegoUsuario()}`);

// // generar la opción aleatoria de la computadora

// let pedirJuegoComputadora = () => {
//   let opcionGenerada = parseInt(Math.random() * 3 + 1);
//   return opcionGenerada;
// };

// console.log(`Computadora: ${pedirJuegoComputadora()}`);

// // definir la logica del juego

// let juego = () => {
//   let usuario = pedirJuegoUsuario();
//   let computadora = pedirJuegoComputadora();

//   console.log(`Usuario: ${usuario}`);
//   console.log(`Computadora: ${(computadora)}`);

//   if (usuario === computadora) {
//     console.log("Esto es un empate");
//   } else if (
//     (usuario === 1 && computadora === 2) ||
//     (usuario === 2 && computadora === 3) ||
//     (usuario === 3 && computadora === 1)
//   ) {
//     console.log("has ganado");
//   } else {
//     console.log("has perdido");
//   }
// };

// juego();

// ===============================================================================================

// opciones del juego

let opciones = [
  {
    nombre: "Piedra",
    imgUrl: "img/manopiedra.png",
  },
  {
    nombre: "Papel",
    imgUrl: "img/manopapel.png",
  },
  {
    nombre: "Tijera",
    imgUrl: "img/manotijera.png",
  },
];

// seleccionar contenedor del juego
const contenedor = document.querySelector("#contenedor");
const btnInicio = document.querySelector("#btnInicio");
btnInicio.addEventListener("click", renderizaropciones);

function renderizaropciones() {
  let contenedoropciones = document.createElement("div");
  contenedoropciones.classList.add("cardJuego", "col-6")

  for (let i = 0; i < opciones.length; i++) {
    let opcion = `<div class="caja">
                    <img  src="${opciones[i].imgUrl}" alt="${opciones[i].nombre}" width="100" height="100">
                    <p class="opciones">${opciones[i].nombre}</p>
                  </div>`;

    contenedoropciones.innerHTML += opcion;
  }

  // console.log(contenedoropciones);
  // console.log(contenedoropciones);
  contenedor.appendChild(contenedoropciones);
}

renderizaropciones();

// console.log(window.contenedor);
// console.log(document.querySelector("#contenedor"));
