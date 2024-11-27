//Ejercico con clases
//Diseñar una clase para mi entidad celular
//Tendra como atributos numero, marca, modelo, capacidda de bateria..
//tendra como metodos encender, apagar, llamar, colgar, enviar mensaje.
class Celular {
    constructor(numero, marca, modelo, capacidadBateria) {
    this.numero = numero;
    this.marca = marca;
    this.modelo = modelo;
    this.capacidadBateria = capacidadBateria;
      this.estaEncendido = false;
    }
  
    encender() {
      if (!this.estaEncendido) {
        this.estaEncendido = true;
        console.log("El teléfono se ha encendido.");
      } else {
        console.log("El teléfono ya está encendido.");
      }
    }
  
    apagar() {
      if (this.estaEncendido) {
        this.estaEncendido = false;
        console.log("El teléfono se ha apagado.");
      } else {
        console.log("El teléfono ya está apagado.");
      }
    }
  
    llamar(numeroDestino) {
      if (this.estaEncendido) {
        console.log(`Llamando al número ${numeroDestino}...`);
      } else {
        console.log("El teléfono está apagado. No se puede realizar la llamada.");
      }
    }
  
    colgar() {
      if (this.estaEncendido) {
        console.log("Llamada finalizada.");
      } else {
        console.log("El teléfono está apagado. No hay llamada activa.");
      }
    }
  
    enviarMensaje(numeroDestino, mensaje) {
      if (this.estaEncendido) {
        console.log(`Enviando mensaje a ${numeroDestino}: ${mensaje}`);
      } else {
        console.log("El teléfono está apagado. No se puede enviar el mensaje.");
      }
    }
  }
  
  // Ejemplo de uso
  const celular = new Celular("123456789", "Samsung", "Galaxy S22", "5000mAh");
  celular.encender();
  celular.llamar("987654321");
  celular.enviarMensaje("987654321", "Hola, ¿cómo estás?");
  celular.colgar();
  celular.apagar()

