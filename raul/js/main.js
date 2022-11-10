 // Datos de conexión al server.

const URL_SERVER = "http://127.0.0.1:5500/";
const DATOS = "raul/datos/datos.json";

// Llama a la función que trae la información del server, cuando se carga la página.

window.onload = datosAjax();

// Función AJAX que Conecta con el server y obtiene la información del fichero datos.json

function datosAjax() {

    console.log("Ejecutando función datosAjax...");

    // Tamaños:

    let jsonHttpTamanios = new XMLHttpRequest();

    jsonHttpTamanios.open('GET', URL_SERVER + DATOS, true);
    jsonHttpTamanios.send();
    jsonHttpTamanios.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Se pasa a la siguiente función la información obtenida si la conexión es correcta.
                mostrarTamanios(this.responseText);
            }        
        }
    }
    
    // Ingredientes:

    let jsonHttpIngredientes = new XMLHttpRequest();

    jsonHttpIngredientes.open('GET', URL_SERVER + DATOS, true);
    jsonHttpIngredientes.send();
    jsonHttpIngredientes.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Se pasa a la siguiente función la información obtenida si la conexión es correcta.
                mostrarIngredientes(this.responseText);
            }        
        }
    }

}

// Crea los elementos en el DOM para mostrar los tamaños de las pizzas.

function mostrarTamanios(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    
    let label = []
    let labelTx = []
    let input = []
;
    for (let i=0; i<objeto.TAM.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${objeto.TAM[i].name}`);
        input[i] = document.createElement("input");

        divTamanios.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "radio");
        input[i].setAttribute("name", "eleccion");
        input[i].value = `${objeto.TAM[i].value}`;

    }
        
}

// Crea los elementos en el DOM para mostrar los ingredientes.

function mostrarIngredientes(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    
    let label = [];
    let labelTx = [];
    let input = [];

    for (let i=0; i<objeto.ING.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${objeto.ING[i].name}`);
        input[i] = document.createElement("input");

        divIngredientes.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "checkbox");
        input[i].setAttribute("name", "eleccion");
        input[i].value = `${objeto.ING[i].value}`;

    }

}

//Refescar formulario
refrescar.onclick = () => { location.reload(); };