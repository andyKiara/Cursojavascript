// haciendo uso de las funciones de tipo closure
//EJERCICIO 1
//Pedir al usuario su nombre y su edad, verificar que si edad sea mayor a 18 años, en ese caso mostraremos un mensaje de bienvenida mas el nombre que ingreso el usuario.
// function bienvenida(){
//     this.evaluar=function(edad, nombre){    
//         if (edad >= 18){
//                 console.log(`Bienvenido(a), ${nombre}!`)
//             }
//         else {
//             console.log("necesitas ser mayor de edad para acceder")
//         }
//     }
// }
// let nombre=prompt("ingresa tu edad: ")
// let edad=promt("ingresa tu nombre: ")
// let mensaje=new bienvenida()
// console.log(mensaje)

//EJERCICO 2
//crear un programa que pida registrar el nombre de un producto el usuario podra luego eliminar el producto o actualizar el nombre del produto.
//observacion al realizar la actualizacion podre ver el valor anterior como el valor nuevo

let producto = (function() {
    let productos = {};
  
    return {
      registrar: function(nombre) {
        productos[nombre] = nombre;
        console.log("Registro exitoso: " + nombre);
      },
      eliminar: function(nombre) {
        if (productos[nombre]) {
          delete productos[nombre];
          console.log("Eliminado: " + nombre);
        } else {
          console.log("No encontrado: " + nombre);
        }
      },
      actualizar: function(anterior, nuevo) {
        if (productos[anterior]) {
          productos[nuevo] = productos[anterior];
          delete productos[anterior];
          console.log("Actualizado: de " + anterior + " a " + nuevo);
        } else {
          console.log("No encontrado: " + anterior);
        }
      },
      mostrar: function() {
        console.log("Productos:");
        for (let producto in productos) {
          console.log(producto);
        }
      }
    };
  })();
  
  while (true) {
    console.log("Menú:");
    console.log("1. Registrar");
    console.log("2. Eliminar");
    console.log("3. Actualizar");
    console.log("4. Mostrar");
    console.log("5. Salir");
  
    let opcion = prompt("Ingrese una opción:");
  
    if (opcion === "1") {
      let nombre = prompt("Ingrese nombre del producto:");
      producto.registrar(nombre);
    } else if (opcion === "2") {
      let nombre = prompt("Ingrese nombre del producto a eliminar:");
      producto.eliminar(nombre);
    } else if (opcion === "3") {
      let anterior = prompt("Ingrese nombre anterior:");
      let nuevo = prompt("Ingrese nombre nuevo:");
      producto.actualizar(anterior, nuevo);
    } else if (opcion === "4") {
      producto.mostrar();
    } else if (opcion === "5") {
      console.log("Hasta luego!");
      break;
    } else {
      console.log("Opción inválida");
    }
  }