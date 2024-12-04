# DOM-Document Object Model
Modelo de Documento de Objeto

El DOM es un conjunto de utilidades especificamente diseñadas para manipular documentos html.
El DOM transforma el archivo html en un arbol de nodos jerarquicos, facilmente manipulables.
El DOM convierte todo el contenido todo el archivo en objeto de JavaScript.

- **Mi archivo index.html**
```html
<body>
    <h1 id="titulo">Titulo</h1>
    <p class="parrafo">Esta es la descripcion de mi pag.</p>
    <ul>
        <li>primer elemento</li>
        <li>segundo elemento</li>
        <li>tercer elemento</li>
    </ul>
</body>
```
- **Mi archivo script.js**
```js
document:{
    Element:body,
    Attr:null,
    text:null,
    child:[
    {
        Element:h1,
        Attr:{id:"titulo"},
        Text:"Titulo",
        child:null
    }
    {
        Element:p,
        Attr:{class:"parrafo"},
        Text:"Esta es la descripcion de mi pag.",
        child:null
    }
    {
        Element:ul,
        Attr:null,
        Text:null
        child:[
        {
            Element:li,
            Attr:null,
            Text:"primer elemento",
            child:null
        },
        {
            Element:li,
            Attr:null,
            Text:"segundo elemento",
            child:null           
        },
        {
            Element:li,
            Attr:null,
            Text:"tercer elemento",
            child:null
        }
        ]
    }
    ]
}
```
DOM ademas de realizar el trabajo de convertir un archivo `HTML` en un objeto de JavaScript nos ofrece una `API` **(Application Programming Interface-Interfaz de Programación de Aplicaciones)**.

## Selectores
Los selectores nos permiten obtener o capturar una etiqueta o varias etiquetas `HTML` incluyendo sus atributos, contenido e hijos si los tuviera.
Los selectores que podemos utilizar son variados podemos capturar etiquetas a travez de sus atributos como de el nombre de la etiquetas misma.
Los Selectores son funciones si hablamos de `POO` entonces se puede decir que son metodos.

Son los siguientes:

-**getElementById** - Devuelve un elemento(etiquet) que tenga un `ID` especifico.

```html
<p id="uno">primer texto</p>
<p id="dos">segundo texto</p>
```
```js
let parrafo=document.getElementById()
```
- **getElementByClassName** - Devuelve un elemento que tenga una clase especifica.
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
```
```js
let parrafo=document.getElemtByClassName("parrafo")
```
- **querySelector** - Devuelve el primer elemento que coincida con el selector ingresado puede ser un id, class, name o tag.
  
```html
<h1 id="titulo">Titulo</h1>
<p class="parrafo">Parrafo uno</p>
<p id="parrafo_dos">Parrafo dos</p>
<h2>subtitulo</h2>
```
```js
let titulo=document.querySelector("#titulo")
let primerParrafo=document.querySelector(".parrafo")
let segundoParrafo=document.querySelector("#parrafo_dos")
let subtitulo=document.querySelector("h2")
```
**Averiguar que otros selectores o metodos existe para recorrer el DOM tiene JavaScript**

1. **getElementsByTagName** Selecciona todos los elementos que tienen un nombre de etiqueta específico. También devuelve una colección de nodos.
  ```js
  let elementos = document.getElementsByTagName('div')
  ```
2. **querySelectorAll** - Selecciona todos los elementos que coinciden con el selector CSS proporcionado. Devuelve una NodeList (similar a un array).
```js
  let elementos = document.querySelectorAll('.miClase');
```  
3. **children** - Similar a childNodes, pero solo devuelve los elementos hijos (ignora los nodos de texto y comentarios).
```js
let elementosHijos = document.getElementById('miId').children;
```
4. **parentNode** -  Selecciona el nodo padre de un elemento.
```js
let padre = document.getElementById('miId').parentNode;
```
## Manipulacion del DOM 
- **createElement** - Este metodo crea un elemento HTML con el nombre que le pasemos por parametro.
```js
let titulo=document.createElement("h1")
```
- **appendChild** - Nos permite hacer hijo un elemento dentro de otro.
```js
let titulo=document.createElement("h1")
let body=document.querySelector("body")
body.appendChild(titulo)
```
## Propiedades de los elementos DOM
- **className** - Permite setear o capturar el nombre de la clase que tenga un elemento.
- **id** - lo mismo que `className` pero con el atributo id.
- **inner HTML** - Devuelve o permite insertar codigo HTML (INCLUYENDO TAG Y TEXTO)
- **inner Text** - Devuelve o permite insertar texto en un elemento
- **textContent** - Nos permite agregar o modificar el contenido de un elemento.
- **value** - Nos permite optener o setearvalores de un elemento `input`.
 ## Acciones  o eventos con elementos en el DOM (averiguar)
> [!NOTE]
> Tecnologias para el procesamiento de texto a travez de marca `markup` (etiquetas- nos permite a travez de `keyword` darle un estilo o significado a un contenido de las etiquetas). La primera tecnologia fue `XML` despues nace `html`, despues la ultima generacion de tecnologia de marcado de texto `markdown`.

