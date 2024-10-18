function ej1() { //Función para el ejercicio 1
    let valor1 = prompt("Introduce el primer valor"); //Pedimos al usuario que introduzca un valor
    let valor2 = prompt("Introduce el segundo valor"); //Pedimos al usuario que introduzca un valor
    let valor3 = prompt("Introduce el tercer valor"); //Pedimos al usuario que introduzca un valor

    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = valor1; //Le asignamos el valor introducido por el usuario

    var cell = document.getElementById('entrada2'); //Cogemos el elemento con el id entrada2
    cell.innerHTML = valor2; //Le asignamos el valor introducido por el usuario

    var cell = document.getElementById('entrada3'); //Cogemos el elemento con el id entrada3
    cell.innerHTML = valor3; //Le asignamos el valor introducido por el usuario

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    

    if (valor1 > 10 || valor2 > 10 || valor3 > 10) { //Si alguno de los valores es mayor que 10
       cell.innerHTML = '"ALGUNO MAYOR QUE 10"'; //Mostramos el mensaje "ALGUNO MAYOR QUE 10"
    } else { //Si no
        cell.innerHTML = '"NINGUNO MAYOR QUE 10"'; //Mostramos el mensaje "NINGUNO MAYOR QUE 10"
    } 

}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('entrada2'); //Cogemos el elemento con el id entrada2
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('entrada3'); //Cogemos el elemento con el id entrada3
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}