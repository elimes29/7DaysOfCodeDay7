/*
En este último desafío, mi propuesta para ti es: crea tu propia calculadora, pero con un detalle muy importante: cada operación debe ser una función diferente en tu código. 

Primero, la persona debe elegir una opción de operación impresa por el programa en la pantalla.

Luego, debe ingresar los dos valores que desea utilizar, y el programa imprimirá el resultado de la operación en cuestión.

Las opciones disponibles deben ser: suma, resta, multiplicación, división, y salir. En esta última, el programa debe detenerse y mostrar un mensaje "Hasta la próxima".
*/

//colculadora
let num1,
  num2,
  resultado,
  ban = 1;
opcion = "";

alert("Bienvenido a la calculadora de Arula-ONE");

do {
  do {
    opcion = prompt(
      '¿Qué operación qieres realizar?\nSuma: "S"\nResta: "R"\nMultiplicación: "M"\nDivisión: "D"\nSalir de la calculadora: "E"'
    );

    if (
      opcion.toUpperCase() == "S" ||
      opcion.toUpperCase() == "R" ||
      opcion.toUpperCase() == "M" ||
      opcion.toUpperCase() == "D" ||
      opcion.toUpperCase() == "E"
    ) {
      ban = 0;
    } else {
      alert(
        `Ingresaste "${opcion}" y debes ingresar ("S", "R", "M", "D" o "E").\nVuelve a intentarlo.`
      );
    }
  } while (ban == 1);

  if (opcion.toUpperCase() != "E") {
    do {
      num1 = parseInt(prompt("Ingresa el primer número de la operación."));
      if (isNaN(num1)) {
        alert('Solo puedes ingresar números enteros.');
      }
    } while (isNaN(num1));

    do {
      num2 = parseInt(prompt("Ingresa el segundo número de la operación."));
      if (isNaN(num2)) {
        alert('Solo puedes ingresar números enteros.');
      }
    } while (isNaN(num2));
  }

  switch (opcion.toUpperCase()) {
    case "S":
      resultado = num1 + num2;
      alert(`El resultado de ${num1}+${num2}=${resultado}`);
      break;
    case "R":
      resultado = num1 - num2;
      alert(`El resultado de ${num1}-${num2}=${resultado}`);
      break;
    case "M":
      resultado = num1 * num2;
      alert(`El resultado de ${num1}*${num2}=${resultado}`);
      break;
    case "D":
      resultado = num1 / num2;
      alert(`El resultado de ${num1}/${num2}=${resultado}`);
      break;
    case "E":
      break;
    default:
      break;
  }
} while (!(opcion.toUpperCase() == "E"));

alert("Gracias por usar nuestra calculadora");