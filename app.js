// ==========================================
// ASIGNATURA: Desarrollo de Sistemas Web
// ACTIVIDAD: Manipular el DOM (Plantilla Base)
// ==========================================

// Reto 1: Selección y Modificación Estática ---
// 1. Selecciona el elemento con ID 'titulo-principal' y cambia su texto a "Mi Panel de Control"
// 2. Selecciona el párrafo con la clase 'descripcion' y cambia su color de fuente y tamaño utilizando .style

document.getElementById('titulo-principal').textContent = "Mi Panel de Control";
var descripcion = document.querySelector('.descripcion');
descripcion.style.color = "red";
descripcion.style.fontSize = "19px";

// Reto 2: Escucha de Eventos (Captura) ---
// 1. Selecciona el botón 'btn-agregar' y el input 'nueva-tarea'
// 2. Agrega un escuchador de eventos (addEventListener) para el clic del botón
// 3. Captura el valor del input y muéstralo en la consola (console.log)

// Reto 3: Creación Dinámica de Nodos ---
// 1. Selecciona el contenedor 'lista-tareas' (el elemento <ul>)
// 2. Modifica el evento del Reto 2 para que, en lugar de usar console.log:
//    a) Crea un nuevo elemento 'li' usando document.createElement()
//    b) Asigna el texto del input al nuevo 'li' usando .textContent
//    c) Inserta el 'li' dentro del '<ul>' usando .appendChild()
//    d) Limpia el valor del input y devuélvele el foco (.focus())

var listaTareas = document.getElementById("lista-tareas");

function guardarInput() {
    var input = document.getElementById("nueva-tarea");
    var valor = input.value;
    var nodo = document.createElement("li");
    nodo.textContent = valor;
    listaTareas.appendChild(nodo);
    input.value = "";
    input.focus();
}
document.getElementById("btn-agregar").addEventListener("click", guardarInput);

// Reto 4: Eliminación y Delegación de Eventos ---
// 1. Agrega un escuchador de eventos al contenedor PADRE ('lista-tareas')
// 2. Utiliza el objeto de evento (e.target) para comprobar si el elemento clickeado es un 'LI'
// 3. Si es un 'LI', elimínalo del DOM usando el método .remove()

function eliminarLi(e) {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
}
document.getElementById("lista-tareas").addEventListener("click", eliminarLi);
