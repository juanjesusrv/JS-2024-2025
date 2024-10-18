

function ej() { 

    var cell = document.getElementById('entrada1');
    var cell2 = document.getElementById('resultado');

    let n = prompt("Introduce un numero natural: ");

    cell.innerHTML = n;
    

    if (n < 0) {
        cell2.innerHTML = "El número introducido no es natural";
    } else {
        // Hacer el factorial
        let factorial = 1;
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        cell2.innerHTML = "El !" + n + " es: " + factorial;
    }

    
        
    
    

    

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}