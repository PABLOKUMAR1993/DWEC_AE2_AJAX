//crear el evento
formulario.addEventListener("submit", procesarPedido);

//Funciones
function procesarPedido() {

    let opciones=document.getElementsByName("eleccion");//Almacena todos los input cuya etiqueta name sea eleccion en un array
    let total=0; //Variable para almacenar la suma de precios
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) { //Comprobamos en cada input si ha sido seleccionado o no
            let precio=parseInt(opciones[i].value); //Pasamos el valor del input a entero
            total+=precio;// En cada ciclo suma el precio del input al total
        }
    }

    document.getElementById("pedidoFinalizado").innerHTML=`Hemos recibido su pedido correctamente.<br><br> El importe total de su pedido es: ` + total+ `€`;
    return false;
}