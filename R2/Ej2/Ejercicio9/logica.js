

function ej() { 
    let n = prompt("Introduce notas (Para acabar introduce un -1): "); 
    let bol = false;

    var cell = document.getElementById('entrada1'); 

    while (n != -1) {
        if (n == -1) {
            break;
        } else if (n < 0 || n > 10) {
            window.alert("Introduce un número entre 0 y 10");
        } else if (n >= 0 || n <= 10){
            cell.innerHTML += n + "<br>";
            if (n == 10) {
                bol = true;
            }
        } else {
            window.alert("Introduce un número válido");
        }
        n = prompt("Introduce notas (Para acabar introduce un -1): ");
    }

    


    var cell = document.getElementById('resultado'); 

    if (bol == true) {
        cell.innerHTML = "SI";
    } else {
        cell.innerHTML = "NO";
    }

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}