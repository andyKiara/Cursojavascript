// Ejercicio 1: Pedir dos números y determinar si su producto es mayor a 100.
const numero1 = parseInt(prompt("Ingrese el primer número:"));
const numero2 = parseInt(prompt("Ingrese el segundo número:"));
const resultado = numero1 * numero2;
resultado > 100 ? console.log("El producto es mayor a 100") : console.log("El producto no es mayor a 100");

// Ejercicio 2: Verificar una contraseña correcta.
const contraseñaCorrecta = "1234";  // Contraseña predeterminada
const contraseñaIngresada = prompt("Ingrese la contraseña:");
contraseñaIngresada === contraseñaCorrecta ? console.log("Contraseña correcta") : console.log("Contraseña incorrecta");

// Ejercicio 3: Determinar si un número es primo.
const numero = parseInt(prompt("Ingrese un número:"));
let esPrimo = numero > 1;
for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    esPrimo = false;
    break;
  }
}
esPrimo ? console.log("El número es primo") : console.log("El número no es primo");
