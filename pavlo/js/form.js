// Al intentar enviar el formulario se ejecuta el siguiente código:
formulario.addEventListener("submit", (e) => {

    // Hago que el formulario no se envie por defecto,
    // para que no se me recargue la página.
    e.preventDefault();

    // Lamo a los métodos comprobadores.
    datosCliente();
    tamanyo();
    ingredientes();

});

// Compruebo los inpus vacios.
function datosCliente() {

    let mensajesError = [];

    // Si alguno está vacio, guardo un mensaje en el array.
    if (nombre.value == "") mensajesError.push("El nombre es obligatorio.");
    if (direccion.value == "") mensajesError.push("La dirección es obligatoria.");
    if (telefono.value == "") mensajesError.push("El teléfono es obligatorio.");
    if (email.value == "") mensajesError.push("El email es obligatorio.");

    // Muestro la totalidad de campos vacios.
    erInputs.innerHTML = mensajesError.join(" - ");

}

// Compruebo si ha seleccionado algún tamaño.
function tamanyo() {

    let tamanyoPizza = document.getElementsByName("tamanyo");
    let vacio = 0;

    for (let i=0; i<tamanyoPizza.length; i++) {
        if (tamanyoPizza[i].checked) {
            vacio++;
        }
    }

    // Si es 0, ningun radio ha sido checked, muestro error.
    if (vacio == 0) {
        erTamanyo.innerHTML = "Tienes que seleccionar 1 tamaño.";
    } else {
        erTamanyo.innerHTML = "";
    }

}

// Compruebo si ha seleccionado algun ingrediente.
function ingredientes() {

    let ingredientesElegidos = document.getElementsByName("ingrediente");
    let contador = 0;

    for (let i=0; i<ingredientesElegidos.length; i++) {
        if (ingredientesElegidos[i].checked) {
            contador++;
        }
    }

    // Si es 0, ningun checkbox ha sido checked, muestro error.
    if (contador == 0) {
        erIngredientes.innerHTML = "Tienes que seleccionar 1 extra.";
    } else {
        erIngredientes.innerHTML = "";
    }

}