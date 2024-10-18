

function ej() { 
    let n = prompt("Introduce un numero par: "); //Pedimos al usuario que introduzca su calificación numérica 

    while (n % 2 == 1 || n == 0 || n != parseInt(n)) {
        n = prompt("Introduce un número par: ");
    }

    var cell = document.getElementById('entrada1'); 
    cell.innerHTML = n; 


    var cell = document.getElementById('resultado'); 

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            cell.innerHTML += i + "<br>";
        }
    }

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío
    var cell = document.getElementById('entrada2'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}