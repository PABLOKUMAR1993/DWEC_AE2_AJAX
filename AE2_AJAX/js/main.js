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

        contenedorTamanyos.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("class", "tamanyo");
        input[i].setAttribute("type", "radio");
        input[i].setAttribute("name", "tamanyo");
        input[i].value = `${jsonDoc.TAMAÑOS[i].value}`;

    }

}


// Esta función crea los elementos en el DOM para mostrar los ingredientes para las pizzas.

function mostrarIngredientes(jsonDoc) {

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    tablaIngredientes.appendChild(tr1);
    tablaIngredientes.appendChild(tr2);

    let th = [];
    let thTx = [];
    let td = [];
    let input = [];

    for (let i=0; i<jsonDoc.INGREDIENTES.length; i++) {

        th[i] = document.createElement("th");
        td[i] = document.createElement("td");
        input[i] = document.createElement("input");
        thTx[i] = document.createTextNode(`${jsonDoc.INGREDIENTES[i].name}`);

        tr1.appendChild(th[i]);
        th[i].appendChild(thTx[i]);
        tr2.appendChild(td[i]);
        td[i].appendChild(input[i]);

        input[i].setAttribute("class", "ingrediente");
        input[i].setAttribute("type", "checkbox");
        input[i].setAttribute("name", "ingrediente");
        input[i].value = `${jsonDoc.INGREDIENTES[i].value}`;
        
    }

}


// REFRESCO.

refresco.onclick = () => { location.reload(); };