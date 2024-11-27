/*console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)
console.log(11)
console.log(12)**/

let contador=1
while (contador<=12){
    console.log(contador)
    contador=contador+1
}
//Ejercisio
//crear un programa que me muestre los numeros pares que existen entre 1 y 20
while (numeroPar<=20){
    if (numeroPar%2==0){
        console.log(numeroPar)
    }
    numeroPar+=0
}

//ejercisios
//crear un programa que pida un numero y muestre por consola todos los numeros menores por la persona

let numerUser=Number(prompt(""))


//EJRCISIO
//CREAR UN PROGRAMA QUE ME MUESTRE LOS NUMEROS MENORES A 20 
for (let i=1;i<=20;i++){
    console.log(i)
    if (i==7){
        break
    }
}