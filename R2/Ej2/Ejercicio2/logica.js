function ej() { 
    let valor1 = prompt("Introduce el dia"); 
    let valor2 = prompt("Introduce el mes"); 

    var cell = document.getElementById('entrada1'); 
    cell.innerHTML = valor1; 

    var cell = document.getElementById('entrada2'); 
    cell.innerHTML = valor2; 

    var cell = document.getElementById('resultado'); 
    

    if (valor1 == 25 && valor2 == 12) { 
       cell.innerHTML = "SI"; 
    } else { 
        cell.innerHTML = "NO"; 
    } 

    

}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('entrada2'); //Cogemos el elemento con el id entrada2
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}