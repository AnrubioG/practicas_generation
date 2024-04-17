// -------------------------Actividad 5------------------------- //
let totalCompra = parseInt(prompt("ingrese el valor de la compra"));
let edad = parseInt(prompt("ingrese su edad"));

function calcularDescuento() {
  if (edad < 18) {
    totalCompra = (totalCompra * 10) / 100;
  } else if (edad > 18 && edad < 65) {
    totalCompra;
  } else {
    totalCompra = (totalCompra * 15) / 100;
  }
  return totalCompra;
}
console.log(calcularDescuento());

// -------------------------Actividad 6 ------------------------- //

let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));

function esMultiplo(numeroUno, numeroDos) {
  if (numeroUno % numeroDos === 0) {
    console.log(`el numero ${numeroUno} es multiplo de ${numeroDos}`);
  } else {
    console.log(`el numero ${numeroUno} NO es multiplo de ${numeroDos}`);
  }
}
esMultiplo(num1, num2);

// -------------------------Actividad 7 ------------------------- //

function esDivisible(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("este numero SI se puede dividir entre 3 y 5");
  } else {
    console.log("este numero NO se puede dividir entre 3 y 5");
  }
}
esDivisible(parseInt(prompt("ingrese un numero")));

// -------------------------Actividad 8 ------------------------- //

function puedeIngresar(edad) {
  if (edad < 16) {
    console.log("No puede ingresar");
  } else if (edad > 16 && edad < 18) {
    console.log("Debe ingresar acompañado");
  } else {
    console.log("Puede ingresar");
  }
}
puedeIngresar(parseInt(prompt("ingrese su edad")));
