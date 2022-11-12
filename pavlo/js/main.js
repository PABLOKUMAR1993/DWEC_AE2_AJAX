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
    let div = document.createElement("div");
    div.setAttribute("id", "contenedorTamanyos");
    sectionTamanyo.appendChild(div);

    for (let i=0; i<jsonDoc.TAMAÑOS.length; i++) {

        label[i] = document.createElement("label");
        labelTx[i] = document.createTextNode(`${jsonDoc.TAMAÑOS[i].name} (
                                              ${jsonDoc.TAMAÑOS[i].precio}€ )`);
        input[i] = document.createElement("input");

        contenedorTamanyos.appendChild(label[i]);

        label[i].appendChild(labelTx[i]);
        label[i].appendChild(input[i]);

        input[i].setAttribute("class", "tamanyo");
        input[i].setAttribute("type", "radio");
        input[i].setAttribute("name", "tamanyo");
        input[i].value = `${jsonDoc.TAMAÑOS[i].value}`;

    }

    tamanyosEliminar = jsonDoc.TAMAÑOS.length;

}


// Esta función crea los elementos en el DOM para mostrar los ingredientes para las pizzas.

function mostrarIngredientes(jsonDoc) {
    
    let table = document.createElement("table");
    table.setAttribute("id", "tablaIngredientes");
    sectionIngredientes.appendChild(table);

    let tr1 = document.createElement("tr");
    let tr2 = document.createElement("tr");
    table.appendChild(tr1);
    table.appendChild(tr2);
    
    let th = [];
    let thTx = [];
    let td = [];
    let inputForm = [];

    for (let i=0; i<jsonDoc.INGREDIENTES.length; i++) {

        th[i] = document.createElement("th");
        td[i] = document.createElement("td");
        inputForm[i] = document.createElement("input");
        thTx[i] = document.createTextNode(`${jsonDoc.INGREDIENTES[i].name} (
                                           ${jsonDoc.INGREDIENTES[i].precio}€ )`);

        tr1.appendChild(th[i]);
        th[i].appendChild(thTx[i]);
        tr2.appendChild(td[i]);
        td[i].appendChild(inputForm[i]);

        inputForm[i].setAttribute("class", "ingrediente");
        inputForm[i].setAttribute("type", "checkbox");
        inputForm[i].setAttribute("name", "ingrediente");
        inputForm[i].value = `${jsonDoc.INGREDIENTES[i].value}`;

        
    }

    ingredientesEñiminar = jsonDoc.INGREDIENTES.length;

}


// Función Actualizar Datos.

refresco.onclick = () => { 
    
    // Elimino el contenido del div de Tamaños.
    let sectionTamanyo = document.getElementById("sectionTamanyo");
    let contenedorTamanyos = document.getElementById("contenedorTamanyos");
    sectionTamanyo.removeChild(contenedorTamanyos);
    
    // Elimino el contenido de la tabla de ingredientes.
    let sectionIngredientes = document.getElementById("sectionIngredientes");
    let table = document.getElementsByTagName("table");
    sectionIngredientes.removeChild(table[0]);

    // Vuelvo a llamar a la función para que traiga los datos de la lista.
    datosAjax();

 };