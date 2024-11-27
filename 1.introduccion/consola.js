//mensa

//para mostrar texto sin formato texto plano
console.log("mensaje de texto sin formato")
//para mostrar un mensaje informativo
console.info("soy informacion")
//mensaje de error
console.error("soy un error")
//mensaje alerta
console.warn("soy alerta")
// mensaje por consola de gestion de tiempo
console.time("gestion")

edad=18
if(edad >=18){
    console.log("eres mayor de edad")
}else{
    console.warn("eres pulpin")
}
console.timeEnd("gestion")

console.timeEnd("tiempo de ejecusion")

// mensaje de tipo tabla
console.table("soy una tabla y edwin el clavo y orlando es virgen")
lenguajes=[
    {nombre:"javascript",extension:".js"},
    {nombre:"python",extension:".jp"},
    {nombre:"php",extension:".php"}
]
console.log(lenguajes)
console.table(lenguajes)