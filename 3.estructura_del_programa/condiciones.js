// capturamos edad y convertimos a numero
// let edad= Number (prompt("ingresa tu edad"))
//console.log(typeof edad)

// if (Number.isNaN(edad)){}
//evalua si el tipo de dato es un numero o no
// if (typeof edad == "number"){
//     // si la comparacion es verdad mostraremos  por consola la raiz cuadrada de edad
//     console.log(edad*edad)
// };

//ejemplo de condicion simple en una sola linea, no tiene cuerpo ({})
// if (1+3==2) console.log("es verdad");

//Ejercicio  de condiciones 
//crear un programa que me pida un numero y me muestre por consola si es par o impat
// let numero=Number(prompt("ingresa un numero: "))
// if (numero % 2 == 0) {
//     console.log(`El numero ${numero} es par`);
// }else{
//     console.log(`El numero ${numero} es impar`);
// }

// ejercicio de condicioon multiple
// let totalCompra=Number(prompt("Total de tu compra es: "))
// if (totalCompra>50 && totalCompra<100){
//   console.log(`tiene un descuento del 10% ${totalCompra*0.10}`)
// }else if(totalCompra>100 && totalCompra<500){
//   console.log(`tienes un descuento del 20% ${totalCompra*0.20}`)
// }else {
//   console.log(`tienes un descuento del 50% es decir solo paga ${totalCompra*0.50}`)
// }

//Ejercicio
//crear un programa que pida al usuario su edad y depoendiendo la edad le daremos una serie de regalos
//regalos
/**
 *  - si su edad esta entre 4 a 8 años te ganaras un chupetin
 * - si su edad esta entre 9 a 13 años te ganaras una pelota firmada por messi
 * - si su edad esta entre 14 a 17, te ganars un celular nokia 6101
 * - si su edad es mayor igual a 18 te ganaras al primo
 */
let edad=Number(prompt("ingresa tu edad y gana un premio"))
if (edad>=4 && edad<=8) console.log("te ganaste un chupetin 🍭")
else if (edad>=9 && edad<=13) console.log("te ganaste una pelota ⚽")
else if (edad>=14 && edad<=17) console.log("te ganaste un celular Nokia 6101 📱")
else if (edad>=18 && edad<=100) console.log("te ganaste un primo 😂")
else console.log("no tienes la edad necesaria :(")

//EJERCISIO
//realizar un programa que pida 5 nombres a travez del navegador.
// y realizara las siguientes evaluaciones
// naranja,limon -> "es una fruta citrica"
// platano, manzana -> "es una fruta dulce"
// fresa,pera,papaya -> "para la ensalada de fruta"
// si ingresa otro tipo de frutas -> "no tiene clasificion"
for (let i=1;i<=5;i++){
    let fruta=prompt(`escribe el nombre de tu fruta numero: ${i}`)
    switch (fruta){
        case "naranja":
        case "limon":
            console.log(fruta,"es una fruta citrica");
            break;
        case (fruta=="manzana" || fruta =="platano");
        
    }
}