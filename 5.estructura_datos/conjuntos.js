//crear una lista que almacene las 5 bocales y luego las muestre por consola
// let vocales=["a","e","i","o","u"]
// console.log(vocales)
//acceder a la vocal o
// console.log(vocales[3])
//acceder a los elementos de la lista con for
// for (let i = 0;i<vocales.length;i++){
//     console.log(vocales[i])
// }
// console.log(vocales.length)

//trabajo
// tengo una lista de 7 frutas 
//crear un programa que identifique si en mi lista existe naranja, en caso de que si, 
//me mostrara su indice, caso contrario me mostrara un mensaje de error
let listaFrutas = ["pera", "uva", "naranja", "manzana"];

for (let i = 0; i < listaFrutas.length; i++) {
    if (listaFrutas[i] === "naranja") {
        console.log(`La fruta naranja se encuentra en el índice ${i}`);
        break;  
    }
}

//crear dos funciones que reciban por parametros una lista de numeros, una funcion encontrar y devolvera el numero menor de la lista y la otra funcion encotrara y devolvera el numero mayor de la lista
//no usar los metodos de min y max.
let numeros = [7, 2, 3, 4, 5];

function numeroMenor(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) menor = numeros[i];  
    }
    return menor;
}

function numeroMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) mayor = numeros[i]; 
    }
    return mayor;
}

console.log(numeroMenor(numeros));  
console.log(numeroMayor(numeros));  

//crear una funcion que me permita contar la cantidad de vocales "a" que tengo en una lista
function contarVocal(lista) {
    let contador = 0; 
    
    for (let i = 0; i < lista.length; i++) {
        let palabra = lista[i];

    
        for (let j = 0; j < palabra.length; j++) {
            if (palabra[j] === 'a' || palabra[j] === 'A') { 
                contador++;
            }
        }
    }

    return contador;
}

let palabras = ["manzana", "banana", "cereza", "uva"];
let Cantidad = contarVocal(palabras);

console.log("Cantidad de vocales 'a'=", Cantidad);

//texto a lista
let texto="hola mundo"
let listaTexto=texto.split("")
console.log(listaTexto)

let lista=["hola","como","estas"]
let nuevoTexto=lista.join(",")
console.log(nuevoTexto)