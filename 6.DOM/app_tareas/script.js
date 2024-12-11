let imput=document.querySelector("#tarea")
let buton=document.querySelector("#btn-agregar")
let ul=document.querySelector("#lista-tareas")

buton.addEventListener("click", ()=>{
    ul.innerHTML += `
        <li>
            ${imput.value}
            <button class="delete">eliminar</button>
        </li>
    `;
    imput.value = "";
})
//boton eliminar
ul.addEventListener("click", (e) => {
    // Verifica si el elemento clickeado es un botón con la clase "delete"
    if (e.target.tagName === "BUTTON" && e.target.classList.contains("delete")) {
        let li = e.target.parentElement; // Obtén el <li> que contiene el botón
        ul.removeChild(li); // Elimina el <li> del <ul>
    }})