// // ____________________________________ ACTIVIDAD 1 ____________________________________ //
// // Escribir una función que sume todos los elementos de una matriz de números

// let matrizPequeña = [10, 20, 30, 40, 50];

// const sumarMatriz = (array) => {
//   let resultado = 0;
//   for (let i = 0; i < array.length; i++) {
//     resultado += array[i];
//   }
//   return resultado;
// };

// // console.log(sumarMatriz(matrizPequeña));

// // ____________________________________ ACTIVIDAD 2 ____________________________________ //
// // Escribir una función que reciba un objeto y una clave, y devuelva el valor correspondiente a esa
// // clave en el objeto

// let persona = {
//   nombre: "angela",
//   apellido: "rubio",
//   edad: 25,
//   estudiante: true,
// };

// const retornarValor = (objeto, llave) => {
//   return objeto[llave];
// };
// // console.log(retornarValor(persona, "nombre"));

// // ____________________________________ ACTIVIDAD 3 ____________________________________ //
// // Imprimí los números del 1 al 14, este último sin incluir.

// const ContarCatorce = () => {
//   for (let i = 1; i < 14; i++) {
//     console.log(i);
//   }
// };

// // ContarCatorce();

// // ____________________________________ ACTIVIDAD 4 ____________________________________ //
// // Escribir una función que elimine un elemento específico de una matriz y devuelva la matriz
// // resultante.

// const eliminarElemento = (arr, elemento) => {
//   arr.splice(elemento, 1);
//   return arr;
// };

// // console.log(eliminarElemento(matrizPequeña, 2));

// // ____________________________________ ACTIVIDAD 5 ____________________________________ //
// // Escribir una función que busque un elemento en una matriz y devuelva su índice.

// const encontrarIndice = (array, elemento) => {
//     let indice = array.indexOf(elemento);
//     return indice;
// };

// // console.log(encontrarIndice(matrizPequeña, 50));


// // ____________________________________ ACTIVIDAD 6 ____________________________________ //
// // Escribir una función que elimine el último elemento de una matriz y devuelva la matriz resultante.

// const eliminarUltimoElemento = (arr) => {
//     arr.pop()
//     return arr;
// };

// // console.log(eliminarUltimoElemento(matrizPequeña));

// // ____________________________________ ACTIVIDAD 7 ____________________________________ //
// // Escribir una función que tome una matriz, un elemento a eliminar, un elemento a agregar para
// // que luego elimine un elemento y agregue otro en una matriz.
  
// const eliminaryAgregarElemento = (arr, pAgregar, pEliminar, elemento) => {
//     arr.splice(pAgregar, pEliminar, elemento);
//     return arr;
//   };

// //   console.log(eliminaryAgregarElemento(matrizPequeña, 1, 1, 2));


// // ____________________________________ ACTIVIDAD 8 ____________________________________ //
// //   Escribir una función que agregue un elemento al inicio de una matriz y devuelva la matriz
// //   resultante.

// const agregarElemento = (arr, elemento) =>{
//     arr.unshift(elemento)
//     return arr
// }

// // console.log(agregarElemento(matrizPequeña, 5));

// // ____________________________________ ACTIVIDAD 9 ____________________________________ //
// // Escribir una función que elimine el elemento del inicio de una matriz y devuelva la matriz
// // resultante.

// const eliminarPrimerElemento = (arr) =>{
//     arr.shift()
//     return arr
// }

// // console.log(eliminarPrimerElemento(matrizPequeña));

// // ____________________________________ ACTIVIDAD 10 ____________________________________ //
// // Escribir una función que tome la porción de una matriz desde el índice 1 hasta el índice 3.

// const partirMatriz = (arr) =>{
//     let parteMatriz = []
//     for (let i = 1; i < 4; i++) {
//         parteMatriz.push(arr[i])
//     }
//     return parteMatriz
// }

// // console.log(partirMatriz(matrizPequeña));


// // ACTIVIDAD 11
// // Escribir una función que duplique todos los elementos de una matriz. Usá e investigá el método
// // map().
// // ACTIVIDAD 12
// // Escribir una función que obtenga una porción de una matriz desde el índice 1 hasta el índice 3
// // (incluido).
// // ACTIVIDAD 13
// // Escribir una función que filtre los números mayores que 5 de una matriz. Usá e investigá el
// // método filter().
// // ACTIVIDAD 14
// // Usar el bucle for of para imprimir los valores de una matriz de números.
// // ACTIVIDAD 15
// // Usá el bucle for in para imprimir las propiedades de un objeto.
// // ACTIVIDAD 16
// // Usá el método forEach() para imprimir los valores de una matriz de strings.
// // ACTIVIDAD 17
// // Escribir una función que busque la posición de un elemento en una matriz.
// // ACTIVIDAD 18
// // Escribir una función que elimine el último elemento de una matriz y muestre el elemento que fue
// // eliminado.
// // ACTIVIDAD 19
// // Escribir una función a la que se le deba ingresar una matriz, un inicio y una cantidad. Esta función
// // debe eliminar varios elementos según la cantidad ingresada desde el índice que se ingrese como
// // inicio.
// // ACTIVIDAD 20
// // Escribir una función que agregue varios elementos al principio de una matriz.
// // ACTIVIDAD 21
// // Escribir una función que multiplique dos matrices y devuelva el resultado.


const numeros = [1,2,3,4,5,6,7]

const una = arr =>{
  return arr.map(x => x + 3 ).filter(x=> x < 7)
}