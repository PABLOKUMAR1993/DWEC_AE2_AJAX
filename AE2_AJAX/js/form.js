// Almaceno el tamaño y los ingredientes elegidos.
let tamanyoElegido = [];
let ingElegidosPrecio = [];


// Al intentar enviar el formulario se ejecuta el siguiente código:
formulario.addEventListener("submit", (e) => {

    // Hago que el formulario no se envie por defecto,
    // para que no se me recargue la página.
    e.preventDefault();

    // Lamo a los métodos comprobadores.
    let booleanDatos = datosCliente();
    let booleanTamanyo = tamanyo();
    let booleanIngredientes = ingredientes();

    // Si todo devuelve true, calculo el total del pedido.
    if (booleanDatos && booleanTamanyo && booleanIngredientes) obtenerTotal();

});

// Compruebo los inpus vacios.
function datosCliente() {

    let mensajesError = [];

    // Si alguno está vacio, guardo un mensaje en el array.
    if (nombre.value == "") {
        mensajesError.push("El Nombre es Obligatorio.");
    } else {
        mensajesError.push("");
    }
    if (direccion.value == "") {
        mensajesError.push("La Dirección es Obligatoria.");
    } else {
        mensajesError.push("");
    }
    if (telefono.value == "") {
        mensajesError.push("El Teléfono es Obligatorio.");
    } else {
        mensajesError.push("");
    }
    if (email.value == "") {
        mensajesError.push("El E-mail es Obligatorio.");
    } else {
        mensajesError.push("");
    }

    // Muesto avisos de los campos vacios.
    erInputNombre.innerHTML = mensajesError[0];
    erInputDireccion.innerHTML = mensajesError[1];
    erInputTelefono.innerHTML = mensajesError[2];
    erInputEmail.innerHTML = mensajesError[3];

    // Si no hay mensajes de error, devuelvo true.
    if (mensajesError[0] == "" && mensajesError[1] == "" && mensajesError[2] == "" && mensajesError[3] == "") return true;
    else return false;

}

// Compruebo si ha seleccionado algún tamaño.
function tamanyo() {

    let tamanyoPizza = document.getElementsByName("tamanyo");
    let vacio = 0;

    for (let i=0; i<tamanyoPizza.length; i++) {
        if (tamanyoPizza[i].checked) {
            tamanyoElegido[i] = 1; // Para saber que tamaño ha elegido
            vacio++;
        } else {
            tamanyoElegido[i] = 0;
        }
    }

    // Si es 0, ningun radio ha sido checked, muestro error.
    // Si hay alguno seleccionado, devuelvo true.
    if (vacio == 0) {
        erTamanyo.innerHTML = "Tienes que seleccionar un tamaño.";
        return false;
    } else {
        erTamanyo.innerHTML = "";
        return true;
    }

}

// Compruebo si ha seleccionado algun ingrediente.
function ingredientes() {

    let ingredientesElegidos = document.getElementsByName("ingrediente");
    let contador = 0;

    for (let i=0; i<ingredientesElegidos.length; i++) {
        if (ingredientesElegidos[i].checked) {
            ingElegidosPrecio[i] = 1; // Para saber cuantos y cuáles ha elegido.
            contador++;
        } else {
            ingElegidosPrecio[i] = 0;
        }
    }

    // Si es 0, ningun checkbox ha sido checked, muestro error.
    // Si hay alguno seleccionado, devuelvo true.
    if (contador == 0) {
        erIngredientes.innerHTML = "Tienes que seleccionar cómo mínimo un extra.";
        return false;
    } else {
        erIngredientes.innerHTML = "";
        return true;
    }

}

// Necesito acceder de nuevo al JSON con los datos de los precios.
function obtenerTotal() {

    let jsonHttp = new XMLHttpRequest();
    // Es curioso que las constantes esten disponibles aquí también, sin hacer el module.export.
    jsonHttp.open("GET", URL_SERVER + RECURSO, true);
    jsonHttp.send(null);
    jsonHttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Si la conexión es exitosa, le paso a las siguientes funciónes la información obtenida.
                mostrarTotal(JSON.parse(this.responseText));
            }
        }
    }

}

function mostrarTotal(jsonDoc) {
    
    // Guardo o acumulo aquí los precios.
    let precioTamanyo;
    let precioIngredientes = 0;

    // Si algún array tiene un 1 en alguna posición, esque ese ingrediente o tamaño ha sido marcado.
    // La posición de ese 1, coincidira la posición del precio del tamaño o ingrediente en la lista.
    for (let i=0; i<jsonDoc.TAMAÑOS.length; i++) {
        if (tamanyoElegido[i] == 1) precioTamanyo = jsonDoc.TAMAÑOS[i].precio;
    }

    for (let i=0; i<jsonDoc.INGREDIENTES.length; i++) {
        if (ingElegidosPrecio[i] == 1) precioIngredientes += jsonDoc.INGREDIENTES[i].precio;
    }

    // Muestro el precio.
    agradecimiento.innerHTML = "¡Gracias! Hemos recibido tu pedido correctamente."
    total.innerHTML = "El Precio Total: " + (precioTamanyo + precioIngredientes) + "€";
    
}