const URL_SERVER = "http://127.0.0.1:5500/";
const RECURSO1 = "pavlo/data/tamanyo.json";
const RECURSO2 = "pavlo/data/ingredientes.json";

// Está función conecta con el server y obtiene l

function datosAjax() {

    let xmlHttpTamanyos = new XMLHttpRequest();

    xmlHttpTamanyos.open('GET', URL_SERVER + RECURSO1, true);
    xmlHttpTamanyos.send(null);
    xmlHttpTamanyos.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                mostrarTamanyos(this.responseText);
            }        
        }
    }
    
    let xmlHttpIngredientes = new XMLHttpRequest();

    xmlHttpIngredientes.open('GET', URL_SERVER + RECURSO2, true);
    xmlHttpIngredientes.send(null);
    xmlHttpIngredientes.onreadystatechange = function() {
        if (this.readyState == 4) {
            if (this.status == 200) {
                mostrarIngredientes(this.responseText);
            }        
        }
    }

}

function mostrarTamanyos(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    console.log("TAMAÑOS");
    console.log(objeto);

}

function mostrarIngredientes(jsonDoc) {

    let objeto = JSON.parse(jsonDoc);
    console.log("INGREDIENTES");
    console.log(objeto);

}