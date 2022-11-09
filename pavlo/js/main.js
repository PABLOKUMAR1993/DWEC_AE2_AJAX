// Datos de conexión al server.

const URL_SERVER = "http://127.0.0.1:5500/";
const RECURSO = "pavlo/data/pizzeriaData.json";

// Llamo a la función que trae la información del server, cuando se ha terminado de cargar la página.

window.onload = datosAjax();

// Está función conecta con el server y obtiene la información de dos ficheros .json.

function datosAjax() {

    // Fichero 1:

    let jsonHttpTamanyos = new XMLHttpRequest();

    jsonHttpTamanyos.open('GET', URL_SERVER + RECURSO, true);
    jsonHttpTamanyos.send(null);
    jsonHttpTamanyos.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Si la conexión es exitosa, le paso a la siguiente función la información obtenida.
                mostrarTamanyos(this.responseText);
                mostrarIngredientes(this.responseText);
            }
        }
    }

}

// Esta función crea los elementos en el DOM para mostrar los tamaños de las pizzas.

function mostrarTamanyos(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    
    let label = [];
    let labelTx = [];
    let input = [];

    for (let i=0; i<objeto.TAMAÑOS.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${objeto.TAMAÑOS[i].name}`);
        input[i] = document.createElement("input");

        sectionTamanyo.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "radio");
        input[i].setAttribute("name", "tamanyo");
        input[i].value = `${objeto.TAMAÑOS[i].value}`;

    }

}

// Esta función crea los elementos en el DOM para mostrar los ingredientes para las pizzas.

function mostrarIngredientes(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    
    let label = [];
    let labelTx = [];
    let input = [];

    for (let i=0; i<objeto.INGREDIENTES.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${objeto.INGREDIENTES[i].name}`);
        input[i] = document.createElement("input");

        sectionIngredientes.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "checkbox");
        input[i].setAttribute("name", "ingrediente");
        input[i].value = `${objeto.INGREDIENTES[i].value}`;

    }

}

// REFRESCO.
// Lo he hecho así porque volviendo a llamar a la función "datosAjax()" se me duplican, triplican, etc...
// todos los datos que vienen del servidor, tal cual funciona, si me da tiempo lo modificaré.

refresco.onclick = () => { location.reload(); };








