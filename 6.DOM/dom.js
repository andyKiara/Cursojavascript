// let parrafoDos=document.getElementById("dos")
// let text=prompt("Ingresa un texto")
// parrafoDos.textContent=text

let newElem=document.createElement("div")
newElem.id="miId"
newElem.className=""
let respuesta=prompt("escribe el color azul o rojo para ver el cuadro")
if(respuesta=="rojo"){
    newElem.className="cuadro_rojo"
}else{
    newElem.className="cuadro azul"
}
// newElem.style="background:red; width:200px; heigth:200px"
let body=document.querySelector("body")
body.appendChild(newElem)