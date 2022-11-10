// Al intentar enviar el formulario se ejecuta el siguiente código:
formulario.addEventListener("submit", (e) => {

    // Hace que el formulario no se envie por defecto para que no se me recargue la página.
    e.preventDefault();

    // Se llaman a los métodos comprobadores.
    comprobarDatosCliente();
    comprobarTamanio();
    comprobarIngredientes();

});

// Se comprueban los inputs de los datos que estan vacios.
function comprobarDatosCliente() {

    let txError = [];

    // Si alguno está vacio, se guarda un mensaje en el array.
    if (nombre.value == "") txError.push("El nombre es obligatorio.");
    if (direccion.value == "") txError.push("La dirección es obligatoria.");
    if (telefono.value == "") txError.push("El teléfono es obligatorio.");
    if (email.value == "") txError.push("El email es obligatorio.");

    // Se muestra la totalidad de campos vacios.
    errorDatos.innerHTML = txError.join(" - ");

}

// Se comprueba si se ha seleccionado algún tamaño.
function comprobarTamanio() {

    let tamanioSeleccionado = document.getElementsByName("tamanio");
    let vacio = 0;

    for (let i=0; i<tamanioSeleccionado.length; i++) {
        if (tamanioSeleccionado[i].checked) {
            vacio++;
        }
    }

    // Si es 0, ningun radio ha sido checkeado y se muestra error.
    if (vacio == 0) {
        errorTamanio.innerHTML = "Selecciona 1 tamaño.";
    } else {
        errorTamanio.innerHTML = "";
    }

}

// Se comprueba si se ha seleccionado algun ingrediente.
function comprobarIngredientes() {

    let ingredientesSeleccionados = document.getElementsByName("ingrediente");
    let contador = 0;

    for (let i=0; i<ingredientesSeleccionados.length; i++) {
        if (ingredientesSeleccionados[i].checked) {
            contador++;
        }
    }

    // Si es 0, ningun checkbox ha sido checkeado y se muestra error.
    if (contador == 0) {
        errorIngredientes.innerHTML = "Selecciona mínimo ingrediente.";
    } else {
        errorIngredientes.innerHTML = "";
    }

}