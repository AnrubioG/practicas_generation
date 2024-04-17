// ---------------------------ACTIVIDAD 1---------------------------
// Crea variables que guarden tu nombre, tu apellido, tu edad, y si sos mayor de edad o no
// (suponiendo que la mayoría de edad es a los 18 años).
// Luego intenta concatenar todas las variables en un mensaje.

let nombre = "Angela";
let apellido = "Rubio";
let edad = 25;
let = true;

// ---------------------------ACTIVIDAD 2---------------------------
// Utilizando typeof muestra los tipo de datos de cada variable creada en la Actividad 1.

console.log(typeof edad);
console.log(typeof nombre);
console.log(typeof apellido);
console.log(typeof mayorEdad);

// ---------------------------ACTIVIDAD 3---------------------------
// Crea variables sin asignarle datos, también crea otra a la cual le asignás el valor “null”, luego
// utiliza typeof y analiza que sucede.

let vacio;
let nada = null;
console.log(typeof vacio);
console.log(typeof nada);

// ---------------------------ACTIVIDAD 4---------------------------
// ¿Te acordás del ejercicio en el cual debíamos calcular un promedio en la clase anterior?
// Acá te lo recuerdo: Suponiendo que tenemos 5 notas distintas, necesitamos un programa que
// nos permita ingresar cada nota y luego nos muestre un promedio de estas notas.
// Lo que tenés que hacer en esta Actividad es ingresar los datos en 5 variables y luego en otra
// variable calcular el promedio.

let notas = [];
let solicitarNotas = () => {
  for (let i = 0; i < 5; i++) {
    notas.push(parseFloat(prompt("Ingrear nota")));
    console.log(notas);
  }
};

solicitarNotas();

let sacarPromedio = () => {
  let promedio = 0;
  notas.forEach((nota) => {
    promedio += nota / notas.length;
  });

  console.log(promedio);
};
sacarPromedio();

// ---------------------------ACTIVIDAD 5---------------------------
// Ahora que ya estamos bastante entrenados. Retoma la Actividad 1, pero esta vez utiliza
// condicionales if.
// Entonces, escribe un código que permita saber si alguien es mayor de edad, en caso positivo
// debe dar algún mensaje confirmándolo, de lo contrario debe informar que esa persona no es
// mayor de edad.

let esMayor = () => {
  if (edad >= 18) {
    console.log(`${nombre} ${apellido} tiene ${edad} años y es mayor de edad`);
  } else {
    console.log(`${nombre} ${apellido} tiene ${edad} años y es menor de edad`);
  }
};
esMayor();

// ---------------------------ACTIVIDAD 6---------------------------
// Se necesita calcular el indice de masa corporal (IMC) de una persona a partir de brindar por
// teclado su peso en KG y su estatura en metros. El resultado del calculo debe ser visualizado
// por pantalla.

let calcularImc = () => {
  let peso = parseFloat(prompt("Ingrese su peso en Kilogramos"));
  let altura = parseFloat(prompt("Ingrese su altura en Metros"));
  let imc = peso / (altura * altura);

  console.log(`su IMC es de: ${imc}`);
};

calcularImc();
