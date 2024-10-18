function ej() { 
    let valor1 = prompt("Introduce tu calificación numérica: "); 

    var cell = document.getElementById('entrada1'); 
    cell.innerHTML = valor1; 

    var cell = document.getElementById('resultado'); 
    

    if (valor1 < 3) { 
       cell.innerHTML = "Muy deficiente"; 
    } else if (valor1 < 5) { 
        cell.innerHTML = "Insuficiente"; 
    } else if (valor1 < 6) { 
        cell.innerHTML = "Bien"; 
    } else if (valor1 < 9) { 
        cell.innerHTML = "Notable"; 
    } else if (valor1 <= 10) { 
        cell.innerHTML = "Sobresaliente"; 
    } else {
        cell.innerHTML = "Introduce un valor válido";
    }

}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}