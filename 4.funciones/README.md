# INDICE
- [INDICE](#indice)
- [FUNCIONES](#funciones)
  - [Estructura de una funcion (como se crea una funcion)](#estructura-de-una-funcion-como-se-crea-una-funcion)
  - [Tipos de Argumentos y Parametros](#tipos-de-argumentos-y-parametros)
    - [Argumentos y parametros posicionales](#argumentos-y-parametros-posicionales)
    - [Argumentos y parametros Nominales](#argumentos-y-parametros-nominales)
  - [Tipos de funciones por su notacion](#tipos-de-funciones-por-su-notacion)
    - [Funciones como valor](#funciones-como-valor)
    - [Funcion como declaracion](#funcion-como-declaracion)
    - [Funcion de flecha (arrow function)](#funcion-de-flecha-arrow-function)
    - [Diferencias](#diferencias)
  - [La pila de llamadas](#la-pila-de-llamadas)
  - [CLOSURE o Funciones de cierre (Funciones que retorna funciones)](#closure-o-funciones-de-cierre-funciones-que-retorna-funciones)
    - [Closure de tipo clase](#closure-de-tipo-clase)
    - [Prototype (Tarea- averiguar y sus ejemplos)](#prototype-tarea--averiguar-y-sus-ejemplos)
  - [RECURSION EN FUNCIONES (tarea)](#recursion-en-funciones-tarea)
  - [FUNCIONES CALLBACKS(tareas)](#funciones-callbackstareas)
- [CLASES](#clases)
  - [ESTRUCTURA DE UNA CLASE EN JAVASCRIPT](#estructura-de-una-clase-en-javascript)
# FUNCIONES
Las funciones en javascript son `bloques de codigo ejecutable`, a los que podemos pasar parametros y operar con ellos.
Nos sirve para modular (modularizar) nuestro programa y estructurarlos en bloques que `realicen una tarea concreta`, de esta manera nuestro codigo es mas legible y mantenible.
Las funciones normalmente, al acabar su ejecucion `devuelven un valor`, que conseguimos con el parametro `return`.

## Estructura de una funcion (como se crea una funcion)
para crear una funcion debemos realizar los siguientes pasos:
1. hacer uso del keyword `function`.
2. darle normbre a la funcion
3. crear los parametros que recibira entre parentesis `()`.
4. crear el cuerpo de la funcion `{}`.
```js
//funcion sin parametros, lleva parentesis igual
function miFuncion(){
    console.log("esta es mi funcion")
}
//funcion con un parametro
function miFuncionParametros(texto){
    console.log("tu parametro es", a)
}
//funcion con varios parametros
function funcionVariosParametros(a,b,c){
    console.log(a + b + c)
}
```
**¿como ejecutamos una funcion**
Para ejecutar una funcion debemos ahcer el llaamdo de la misma, haciendo uso unicamente de su nombre y los parametros que recibira.
```js
//crear funcion
function saludo(){
    console.log("hola")
}
//ejecutar funcion
saludo()
// o
dunction salu2(texto){
    console.log("hola: ", texto)
}
//ejecutar
salu2("jory")
```
> [!NOTE]
> ** Reglas para poner el nombre a una funcion** -
Los nombres de las funciones deben representar acciones por lo que deben construirse usando el `verbo` que representa la accion seguido de un `sustantivo` representara a la entidad.
```js
function crearUsuario(){
}
function enviarCorreo(){
}
```
## Tipos de Argumentos y Parametros
Es la manera como se remplaza los argumentos con los parametros
### Argumentos y parametros posicionales
Se les llama posicionales por que los argumentos tomara los parametros en el orden que se le pase a la funcion, segun la posicion entre argumento y parametro.
```js
function sumaNumeros(a,b,c,d){
    let suma=a+b+c+d
    return suma
}
//argumentos posicionales
let respuesta=sumaNumeros(1,2,3,4)
console.log(respuesta)
//a toma el valor de 1 y asi sucesivamente en el orden que corresponda
```
### Argumentos y parametros Nominales
Se les llama nominales se les conoce a los argumentos que en su creacion se asocian a un parametro en especifico.
```js
//nominal
function registroAlumno(nombre,apellido,sexo){
    let respuesta=`${nombre},${apellido},${sexo}`
    return respuesta
}
registroAlumno(sexo="primo",nombre="edwin",apellido="del mar")
//posicional
registroAlumno("jory", "rodriguez", "todos los dias")
```
> [!NOTE]
> Posicionales en orden y Nominales especificar el parametro y su valor.
## Tipos de funciones por su notacion
### Funciones como valor
En este caso se crea  una funcion como si fuera un valor de un enlace.
```js
let saludo=function(){
    console.log("bienvenido")
}
saludo()
```
En este caso el nombre de la funcion sera el nombre que le  pongamos al enlace y para llamarlo o ejecutarlo debemos poner el nombre del enlace mas los parentesis.
Al igual que una funcion clasica podemos tambien pasarle parametros.
### Funcion como declaracion
Se le conoce como funcion `declarativa` a la manera clasica de como creamos una funcion.
```js
function saludo(){

}
console.log(saludo())
```
### Funcion de flecha (arrow function)
Esta funcion es introducida a partir de la funcion de ecma script 5 `es5`.
Se implemento para la creacion y ejecucion rapida y mas entendible de las funciones.
la funcion flecha evita la `verbosidad` en javascript
>[!NOTE]
>`verbosidad` o `verboso` se utiliza en la programacion para referirce a un codigo que necesita demaciadas lineas de codigo o necesita cumplir estrictamente una serie de reglas podemos comprar la `verbosidad` a un texto demaciado extenso o redunante.
se crea de la misma manera que una funcion como valor, eso quiere decir que la funcion flecha sera el valor de un enlace.
la funcion flecha tiene la siguiente estructura:
el parametro seguido del simbolo flecha `=>` y el cuerpo de ser necesario o solo de codigo que se retornara.
```js
function saludo(){
    return "hola mundo"
}
console.log(saludo())
// de flecha, no tiene cuerpo a menos que el codigo sea muy extenso
let saludo=()=>("hola mundo")
console.log(saludo())
//mensaje
let mensaje=texto=>console.log("hola, ",texto)
console.log(mensaje("el primo"))
// en el caso de tener mas de un parametro y ejecutar mas de una sola linea de codigo
let registoUsuario=(nombre,apellido)=>{
    let alumno=`${nombre},${apellido}`
    return alumno
}
console.log(registroUsuario("edwin","cachondo"))
```
### Diferencias
Las diferencias que te enemos al momento de crear una funcion declarativa, funcion como valor y flecha es el binding.
- **binding** es una tecnica que guarda las funciones y variables (enlaces)  sube al principio la declaracion y no el valor a la cabecera o al principio del archivo de javascript.
```js
despedida() //en funciones declarativas
function saludo(){
    return "hola"
}
function despedida(){
    return "adios"
}
```
```js
saludo()
despedida()
```
## La pila de llamadas
Es una tecnica que se usa para controlar de manera correcta la ejecucion de una funcion.
-**tarea** averiguar sobre LIFO, es un algoritmo de estructura de datos, tecnica para ordenar una pila de lamadas, last in first out
```js
//programa 
function cortarTomate() {
    console.log("cortando tomate")
}
function cortarLechuga() {
    console.log("cortando lechuga")
}
function cortarPepino() {
    console.log("cortando pepino")
}
function cortarLimon() {
    console.log("cortando limon")
}
function prepararEnsalada() {
    cortarTomate()
    cortarLechuga()
    cortarPepino()
    cortarLimon()
    console.log("mezclando verduras")
}
function comer() {
    prepararEnsalada()
     console.log("comiendo la ensalada")   
}
comer()
```
![alt text](image.png)
## CLOSURE o Funciones de cierre (Funciones que retorna funciones)
Un CLOSURE es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el keyword `return`.
Antes de que aparezca la version `ecma 6` los `closure` eran un patron creacional que nos permitia modularizar nuestro codigo, en lugar de usar las `clases` que eran populares en otros lenguajes pero que javascript aun no lo implementaba.
```js
//una funcion que retorna otra funcion, por lo general es una funcion anonima
//funcion clasica
function retornaValor(n){
    return n+1
}
//llamando funcion clasica
retornaValor(10)
//funcion closure
function retornaValor(n){
    return function(){
        return n+1
    }
}
//llamando funcion closure
retornaValor(10)()
```
>[!NOTE]
>Las funciones `closure` son usadas por que pueden mantener el valor de sus enlaces o variables locales en todo el proceso de la ejecucion de su funcion padre por cada llamada que se le realice.
### Closure de tipo clase
Son funciones cuyo uso son iguales a las clases, dentro de la ejecucion de una clase tenemos lo que llama como `instancia`. En javascript tenemos funciones `closure` que se pueden instanciar al igual que una clase, la diferencia con las funciones `closure` clasicas es que en esta hacemos uso de la palabra reservada `keyword` llamada `this`.
```js
function contador(){
    this.contador=1
    this.incre=function(){
        this.contador++
    }
    this.decre=function(){
        this.contador--
    }
}
//instanciar, almacenar la funion en una variable, hacer uso de new para crear la instancia
let count1=new contador()
console.log(count1.contador)
count1.incre()
console.log(count1.contador)
//ejemplo2
for(let i=0;i<5;i++){
    count1.incre()
}
```
>[!NOTE]
>la funcion closure de tipo clase no hace uso de `return` en sus funciones al hacer uso de `this` cada funcion o variable estara enlazada al objeto que se cree.

>[!WARNING]
>El problema principal de este tipo de funciones es que cuando creamos un nuevo objeto apartir de la funcion tipo clase, reservara espacio en memoria para toda la clase y sus valores creador,eso quiere decir variables y funciones. Cada vez que llamamos a una funcion esta se replica en la memoria.

### Prototype (Tarea- averiguar y sus ejemplos)
EEn JavaScript, un "prototype" es como un libro de referencia que un objeto puede usar para encontrar información y propiedades.
Imagina que tienes un coche. Cada coche (cada objeto) tiene ciertas características, como el color o el modelo. Pero todos los coches comparten ciertas funciones, como acelerar o frenar. Estas funciones se pueden definir en un "prototype".
Cuando creas un nuevo coche, en lugar de tener que volver a escribir todas las funciones para cada coche, simplemente le dices que use el "prototype" de los coches para acceder a esas funciones ya definidas. Esto hace que el código sea más eficiente y ordenado.
En resumen, el "prototype" es una manera de compartir funciones y características entre varios objetos en JavaScript, lo que ayuda a evitar la repetición y hace que el código sea más fácil de manejar.
```js
// Definimos un "constructor" para el coche
function Coche(color, modelo) {
    this.color = color;
    this.modelo = modelo;
}

// Agregamos funciones al "prototype" del coche
Coche.prototype.acelerar = function() {
    console.log(`El ${this.modelo} está acelerando.`);
};

Coche.prototype.frenar = function() {
    console.log(`El ${this.modelo} está frenando.`);
};

// Creamos dos coches nuevos
const coche1 = new Coche('rojo', 'Toyota');
const coche2 = new Coche('azul', 'Honda');

// Usamos las funciones del prototype
coche1.acelerar(); // El Toyota está acelerando.
coche2.frenar();   // El Honda está frenando.
```
![alt text](image-1.png)
```js
function  Contador(nombre){
    this.count=
    this.nombre=nombre
}
Contador.prototype={
    incremento:function(){this.count++},
    dcremento:function(){this.count--},
    mostrarDatos:function(){return `${this.count}`,`${this.nombre}`}
}
```
## RECURSION EN FUNCIONES (tarea)
Cuando una funcion se llama a si misma dentro de su propio codigo, es decir que sirve para descomponer un problema en pequeños problemas y asi llegar mas facil al finaldel problema.
```js
function factorial(n){
    if (n===1){
        return 1;
    }else{
        return n+factorial(n-1);
    }
}
console.log(factorial(5));
```

## FUNCIONES CALLBACKS(tareas)
Una funcion callback es basicamente una funcion que se pasa como argumento a otra funcion y que se ejecuta una vez que la otra funcion haya terminado su trabajo. Es una tarea quele decimos a la computadora que haga despues de otra tarea es como decirle a javascript que `cuando termine de hacer una primera accion ejecute la segunda accion`. 
```js
function mostrarMensaje(mensaje,callback)
    console.log(mensaje);
    callback();
function tareaCompleta(){
    console.log("la tarea esta completa");
}
mostrarMensaje("bienvenido",tareaCompleta);
```
# CLASES
Las clases en javascript llegan en la version `ECMAScript 6`, javascript no tenia al igual que otros lenguajes de programacion orientados a objetos las `clases` ya que js se enfocaba en la `programacion funcional`, sin embargo con la llegada es `Es6`, javascript adopta ser un lenguaje de programacion multiparadigma, entre ellos la programacion orientada a objetos con la llegada de las `clases`.
## ESTRUCTURA DE UNA CLASE EN JAVASCRIPT
Una clase esta separada en 3 grandes secciones.

1. el nombre de la clase debera ser en singular y en PascalCase
2. debera tener atributos (valores o variables), estos deberan ser sustantivos y estar escritos en camelCase
3. deberan tener metodos (acciones, funciones), estos deberan ser verbos o estar escritos en camelCase.

> [!NOTE]
> Una entidad: es cualquier cosa que puedes describir o que tiene atributos y acciones ejmplo carro.
```js
class Computadora{
    //atributos
    constructor(marca){
        this.marca=marca
        this.color=""
        this.tipoCase="tower"
    }
    //metodos
    encender(){return "estoy encendiendo"}
    apagar(){return "estoy cerrando sesion y guardando informacion antes del apagado"}
    escribir(){return "escribiendo mi informe"}
    jugar(){return "jugando dota"}
}
//instanciar
let miPc()=new Computador("gigabyte")
miPc.encender()
```
>[!NOTE]
>prototype=funcion
>clase=metodo 