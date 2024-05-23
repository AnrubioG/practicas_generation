let cantidades = [];

let solicitarCantidades = (array) => {
  for (let i = 0; i < 3; i++) {
    let cantidad = parseFloat(prompt(`Ingrese la cantidad ${i + 1}`));
    if (!isNaN(cantidad)) {
      array.push(cantidad);
    } else {
      alert("Por favor, ingrese un número válido.");
      i--;
    }
  }
  console.log(array);
};

// solicitarCantidades(cantidades);

function sacarMayor(array) {
  let mayor = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  console.log(`el numero mayor es ${mayor}`);
}

// sacarMayor(cantidades);
// https://drive.google.com/file/d/1Czm2fLYEr0vFxL9ONTFZt2KaeVNX3Pm8/view


// let cantidades = [];

// let solicitarCantidades = (array) => {
//   for (let i = 0; i < 3; i++) {
//     let cantidad = parseFloat(prompt(`Ingrese la cantidad ${i + 1}`));
//     if (!isNaN(cantidad)) {
//       array.push(cantidad);
//     } else {
//       alert("Por favor, ingrese un número válido.");
//       i--;
//     }
//   }
//   console.log(array);
// };

// solicitarCantidades(cantidades);

// function sacarMayor(array) {
//   let mayor = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > mayor) {
//       mayor = array[i];
//     }
//   }
//   console.log(`el numero mayor es ${mayor}`);
// }

// sacarMayor(cantidades);