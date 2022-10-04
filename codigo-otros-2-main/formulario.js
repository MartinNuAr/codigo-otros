// Se indenta código y se colocan ';'

// Se nombran variable con nombres más específicos y por medio de la id

const campoNombre = document.getElementById("name");
const campoEdad = document.getElementById("age");
const campoNacionalidad = document.getElementById("nationality");

// Se obtiene la lista desde un inicio
const lista = document.getElementById("lista-de-invitados");

//Se añade el botón y se quita el formulario
const btnSubmit = document.getElementById("btnSubmit")

// Se cambia el evento por un event listener
btnSubmit.addEventListener("click", function (event) {

  event.preventDefault();

  let nombre = campoNombre.value;
  let edad = campoEdad.value;

  // Se escriben los datos en una sola línea
  let nacionalidad = campoNacionalidad.options[campoNacionalidad.selectedIndex].value;
  // Se eliminan console log innecesarios

  if (nombre.length === 0) {
    campoNombre.classList.add("error");
  }
  else if (edad < 18 || edad > 120) {
    campoEdad.classList.add("error");
  } else {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});

// Se refactoriza la función como una plantilla
function agregarInvitado(nombre, edad, nacionalidad) {
    lista.innerHTML += `<div class="elemento-lista">
                          <span>Nombre: </span>
                          <input/ value="${nombre}">
                          <br/>
                          <span>Edad: </span>
                          <input/ value="${edad}">
                          <br/>
                          <span>Nacionalidad: </span>
                          <input/ value="${nacionalidad}">
                          <br/>
                          <button id="boton-borrar">Eliminar invitado</button>
                          <br>
                        </div>`;

  const botonBorrar = document.getElementById("boton-borrar");
  
  botonBorrar.addEventListener("click", function (event) {
    event.target.parentElement.remove()
  });

}