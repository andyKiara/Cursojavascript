# valores, tipos y Operadores
## Indice
- [valores, tipos y Operadores](#valores-tipos-y-operadores)
  - [Indice](#indice)
  - [valores](#valores)
    - [datos primitivos](#datos-primitivos)
      - [-Numeros(Number)](#-numerosnumber)
      - [numeros especial](#numeros-especial)
      - [Aritmetica (operadores aritmeticos)](#aritmetica-operadores-aritmeticos)
      - [Aritmetica](#aritmetica)
      - [cadenas](#cadenas)
      - [concatenacion](#concatenacion)
      - [plantillas literales](#plantillas-literales)
      - [Operadores Unarios](#operadores-unarios)
      - [Valores Boleanos](#valores-boleanos)
      - [Operador Ternario](#operador-ternario)
## valores
Imagina un mar de bits.
Una computadora moderna tiene mas de 100 mil millones de bits
almacenados en su
`memoria de trabajo`o`memoria principal`o`memoria volatil`o`ram`.
Ahora la memoria no volatil o memoria secundaria tiene estoos bits de manera ordenada generalmente apilada como si de un estante
de una bblioteca se tratara.

cuando nosotros programamos hacemos uso de `memoria de trabajo`,
para trabajar de manera ordenaada con los bits que se encuentra en nuestro mar de bits, javascript ordena los bits en puequeñas partes o piezas de informacion a esto se le conoze como `VALORES`.
cada valor tiene una funcionalidad distinta puede ser un numero un texto o una funcion.

cuando hablamos de tipos de datos en javascript nos referimos asu representacion binaria y al tipo de valor que usamos

### datos primitivos
son aquellos datos que ya existen no pueden ser creados, actualizados ni eliminados solo pueden ser llamados para el uso que deseamos darle.
los datos primitivos son
#### -Numeros(Number)
los valores de tipo numero, como es de esperar son numeros y en javascript se escribe o se hace el llamado de este valor de la siguiente manera
- numero de tipo entero
```js
20
//estamos usando un patron de bits para el numero 20 que existira dentro de la memoria de trabajo.
```
- numero de tipo flotante decimal fraccion
```js
2.7
0.
.0
```
- numeros notacion cientifica
```js
2.998e8
// 2.998 * 10'8
```
>[!WARNING]
> Cuando javascript realiza operacion con numeros enteros eo resultado siempre sera exacto , cuando realize operacion con numeros decimales el resultado perdera precision porque solo tiene 64 para almacenar el numero esto suele ocurrir con resultados cuyos decimales sean infinitos como el caso el numero PI **es nuestra responsabilidad como programadores hacer el uso de los decimales con aproximaciones para evitar errores**.
---
>[!TIP]
> cuando javascriptt hace el trabajo de memoria (cuando crea un patron de bit para almacenar) todos numero son almacenados como decimal positivo.
```js
//dato numerico de tipo entero
//entero positivo
23
//entero negativo
-23
//decimal positivo
.0
//decimal negativo
-3,0
```

#### numeros especial
en javascript existen 3 valores de tipo numero que se consideran un dato primitivo numerico de tipo especial
```js
Infinity
-Infinity
NaN
//no es un numero (not a number)
// cuando el resultado de una operacion es matematicamente imposible.
```
#### Aritmetica (operadores aritmeticos)
#### Aritmetica 
la principal operacion que se puede hacer con numeros es la aritmetica .
para esto tenemos los Operadores aritmeticos como:
- suma(+).
- resta (-).
- multiplicacion (*).
- division (/).
- potencia (^)
**podemos agrupar operaciones con () las operaciones que esten entre los parentesis se ejecutaran primero**
consulta el archivos de operadores [aqui](./operadores.js).
ve los ejercisios [aqui](./ejercisios.js)

#### cadenas 
el siguiente tipo de dato primitivo es la `cadena` - `string`
¿para que se usan las cadenas en javascript?
para representar texto
se escribe encerrando su contenido entre comillas:
```js
"soy un texto"//comillas dobles
"tambien soy un texto"//comillas simples
`yo tambien soy`//acento grave

//cadena vacia
""
```
**problema** - como representamos un texto en comillas dentro del contenido de una cadena podemos seguir las siguientes recomendaciones:
```js
//si nuestro texto tiene que estar entre comillas simples
"este texto se muetra entre comillas simples"
//si nuestro texto tiene que estar entre comillas dobles
"este texto se muesrra entre comillas dobles"
//si nuestro texto tendra tanto comillas dobles como simples
`esta en comillas simples`,"esta en comillas dobles"
```
otra manera de hacer antes mencionado es haciendo uso de la barra invertida `\` tambien conocida como `caracter de escape`
hacer uso de este caracter indica que el caracter posterior tendra un significado especial.
```js
" de este texto solo esta \"palabra\" estara en comillas"
```
**problema** -deseamos agreagar un salto de linea en nuestro texto.
```js
//solucionamos este problema haciendo uso de los acentos graves
`primera linea
segunda linea`
```
antes de la incorporacion de es6 en el uso de acentos graves  se utilizaba el carcater de escape `\`
```js
"esta es mi primera linea \n y esta es la segunda linea"
```
**problema** - deseo tabular un texto 
```js
`
este texto no esta tabulado
    este texto si esta tabulado
`
```
ahora tabularemos haciendo uso del esacape
```js
"si tabular \t y tabulado"
```
#### concatenacion 
el unico aritmertico que puede ser usado por cadenas es el operador de suma (+) puede ser uzado entre dos a mas cadenas y pasa a llamar operador de conactenacion, lo que realiza es unir cadena en una sola.
```js
"hola"+"mundo"
```
#### plantillas literales
las plantillas literales menscionadas anteriormente con el nombre de acentos graves son usadas paara mostrar texto literal,tambien nos permite ejecutar codigo javascript dentro de una plantilla literal el codigo o resultado de este codigo sera transformado en un dato de tipo texto y se incluira en la posicion en que se encuentre.
para hacer uso de esta funcionalidad debemos usar,
las siguientes expresion `${}`
```js
//creando una plantilla literal - tempalate literals
``
//usando js dentro de una plantilla literal
`la suma de 1+1`
```
>[!TIP]
> se dice literal porque con el formato que codificamos sera mostrado de esa forma en la consola.
#### Operadores Unarios
nO todos los operadores son simbolos, algunos se escriben como palabras.
Un ejemplo es el operador `typeof`, este operador produce un valor de cadena que indica el tipo del valor que lo proporcionamos.

`operadores bianrios` se les conoce porque operan sobre dos valores `2*5`
`operadores unario` porque solo trabaja con un valor.
```js
//para poder ver su funcionalidad o el valor que genera siempre debemos mostrarlo en un console
console.log(typeof 5)
```
#### Valores Boleanos
este tipo de dato primitivo es util cuando tenemos un valor que distinga solo entre dos posibilidades, como `si` y `no` o `encendido` y `apagado`.
Para este proposito javascript tiene un tipo de dato `Booleano`, que tiene solo dos valores,`true` y `false`
**que formas de producir valores booleanos tenemos?**
1. **Usando operadores de comparacion**
 los operadores de comapracion son los siguientes
 - Mayor que(>).
 - Menor que(<).
 - Mayor o igual que(>=).
 - Menor que(<=).
 - igual a (==).
 - Extrictamente igual (===).
 - No es igual a (!=)
2. **Usando los Operadores Logicos**
 javaScript soporta tres operadores logicos
 - and (y) representacion en javascript `&&`,
 - or (o) representacion en javascript ``
>[!TIP]
>**AND &&**- SI TENEMOS dos valores verdaderos devolvera el segundo,si tenemos un valor falso y uno verdadero devolvera el valor falso.
>[!TIP]
>**OR´||´**-Si tenmos dos valores verdaderos devolvera el primer valor verdadero. si tenemos un valor verdadero y uno falso devolvera el valor verdadero.
3. **Usando el operador relacional**
4. este operador compara su valores y retorna un booleano como resultado.
 lo que evalua este operdor es di un propiedad especifica se encuentra en un objeto.
evalua si el primer valor que se encuentra a su izquierda existe o forma parte del segundo valor que se encuentra a su derecha.
```js
"a" in ["a","e","i","o","u"]
```
#### Operador Ternario
este operador trabajo con tres valores el primer valor es el que determinara si se muestra el resto de valores .
eso quiere decir si el priemr valor es verdadero mostrara el segundo mientras que si falso mostrara el tercer valor.

