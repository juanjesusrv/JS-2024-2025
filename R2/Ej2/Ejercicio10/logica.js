

function ej() { 
    let n = prompt("Introduce un numero para decir si es primo (entre 1 y 10000): "); 
    let bol = true; 

    while (n < 1 || n > 10000 || n != parseInt(n)) {
        n = prompt("Introduce un número entre 1 y 10000: ");
    }

    var cell = document.getElementById('entrada1');

    cell.innerHTML = n;

    if (n == 1) {
        bol = false;
    }
    
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          bol =  false;
        }
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