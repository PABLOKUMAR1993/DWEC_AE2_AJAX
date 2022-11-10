// Datos de conexión al server.

const URL_SERVER = "http://127.0.0.1:5500/";
const RECURSO = "pavlo/data/pizzeriaData.json";


// Llamo a la función que trae la información del server, cuando se ha terminado de cargar la página.

window.onload = datosAjax();


// Está función conecta con el server y obtiene la información de dos ficheros .json.

function datosAjax() {

    let jsonHttp = new XMLHttpRequest();

    jsonHttp.open("GET", URL_SERVER + RECURSO, true);
    jsonHttp.send(null);
    jsonHttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                // Si la conexión es exitosa, le paso a las siguientes funciónes la información obtenida.
                mostrarTamanyos(JSON.parse(this.responseText));
                mostrarIngredientes(JSON.parse(this.responseText));
            }
        }
    }

}


// Esta función crea los elementos en el DOM para mostrar los tamaños de las pizzas.

function mostrarTamanyos(jsonDoc) {
    
    let label = [];
    let labelTx = [];
    let input = [];

    for (let i=0; i<jsonDoc.TAMAÑOS.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${jsonDoc.TAMAÑOS[i].name}`);
        input[i] = document.createElement("input");

        sectionTamanyo.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "radio");
        input[i].setAttribute("name", "tamanyo");
        input[i].value = `${jsonDoc.TAMAÑOS[i].value}`;

    }

}


// Esta función crea los elementos en el DOM para mostrar los ingredientes para las pizzas.

function mostrarIngredientes(jsonDoc) {
    
    let label = [];
    let labelTx = [];
    let input = [];

    for (let i=0; i<jsonDoc.INGREDIENTES.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${jsonDoc.INGREDIENTES[i].name}`);
        input[i] = document.createElement("input");

        sectionIngredientes.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("type", "checkbox");
        input[i].setAttribute("name", "ingrediente");
        input[i].value = `${jsonDoc.INGREDIENTES[i].value}`;

    }

}


// REFRESCO.

refresco.onclick = () => { location.reload(); };