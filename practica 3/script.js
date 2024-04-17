// --------------------- 1. CAPITALIZAR UNA PALABRA ---------------------//

function convertirMayuscula(texto) {
  console.log(texto.toUpperCase());
}

// convertirMayuscula(prompt('Ingrese un texto en minuscula'))

// --------------------- 2. CONTADOR DE CARACTERES ---------------------//
function contarCaracteres(texto) {
  num;
  console.log(texto.length);
}

// contarCaracteres(prompt('Ingrese un texto'))

// --------------------- 3. CONCATENAR DOS PALABRAS ---------------------//

function concatenar(nombre, apellido) {
  let saludo = "Hola";
  console.log(saludo.concat(" ", nombre, " ", apellido));
}

// concatenar(prompt('Ingrese Su nombre'), prompt('Ingrese su apellido'))

// --------------------- 4. ¿QUÉ POSICIÓN TIENE EL CARÁCTER?---------------------//

function encuentraCaracter(texto, posicion) {
  let caracter = texto.charAt(posicion);
  console.log(caracter);
}

// encuentraCaracter('patata', 0)

// --------------------- 5. VERIFICACIÓN DE UN NÚMERO ENTERO ---------------------//
function esEntero() {
  let numero = parseFloat(prompt("ingrese un numero"));
  if (Number.isInteger(numero)) {
    console.log("Este numero es un entero");
  } else {
    console.log("Este numero NO es un entero");
  }
}

// esEntero();

// --------------------- 6. VALIDACIÓN DE LA EDAD MÍNIMA ---------------------//

function esMayor() {
  let edad = parseInt(prompt("ingrese su edad"));
  if (edad >= 18) {
    console.log("Bienvenido eres mayor de edad, disfruta la cerveza!!");
  } else {
    let menor = 18 - edad;
    console.log(
      `No eres mayor de edad pero regresa en ${menor} años para ser bienvenido! `
    );
  }
}
// esMayor()

// --------------------- 7. VERIFICACIÓN DE UN NÚMERO PAR O IMPAR ---------------------//

function esPar() {
  let numero = parseInt(prompt("ingrese un numero"));
  if (numero % 2 === 0) {
    console.log("Genial ahora eres parte del equipo Pares");
  } else {
    console.log("Ups creo que ahora eres parte del equipo Impares");
  }
}
// esPar()

// --------------------- 8. CONVERTIDOR DE TEXTO A MAYÚSCULAS O MINÚSCULAS ---------------------//

function convertirTexto() {
  let texto = prompt("ingrese el texto que desea convertir");
  let opcionUsuario = prompt("Desea este texto en mayuscula o en minuscula?");
  switch (opcionUsuario) {
    case "mayuscula":
      console.log(texto.toUpperCase());
      break;
    case "minuscula":
      console.log(texto.toLowerCase());
      break;
    default:
      console.log("Debe elegir mayuscula o minuscula");
      break;
  }
}
// convertirTexto();

// --------------------- 9. VALIDACIÓN DE CONTRASEÑA NUMÉRICA ---------------------//

function validarContrasenia() {
  let contrasenia = prompt("Ingrese una contraseña de 4 dígitos");
  if (contrasenia.length === 4 && !isNaN(contrasenia)) {
    console.log("Contraseña creada con exito");
  } else {
    console.log("Porfavor ingrese una contraseña correcta de 4 dígitos");
  }
}
// validarContrasenia();

// --------------------- 10. VERIFICACIÓN DE UN NÚMERO ENTERO POSITIVO ---------------------//

// Escribe una función que solicite al usuario ingresar un número entero positivo utilizando
// prompt(). La función debe validar si el número ingresado es un entero positivo utilizando
// parseInt() y mostrar un mensaje apropiado.
// Dato: nuevamente deben usar Number.isInteger()
// ¡Acá la documentación!



// --------------------- 11. OBTENCIÓN DEL PRIMER CARÁCTER DE UNA CADENA ---------------------//
// Escribe una función que solicite al usuario ingresar una palabra. Luego, la función debe
// obtener el primer carácter de la palabra y mostrarlo.



// --------------------- 12. SUMA DE DOS NUMEROS ---------------------//
// Escribe una función que solicite al usuario ingresar dos números. Luego, la función debe
// sumar los dos números y mostrar el resultado.