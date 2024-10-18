

function ej() {
    let n = prompt("Introduce la cantidad de numeros de la secuencia: ");

    while (n != parseInt(n) | n < 1 | n > 100) {
        n = prompt("Introduce un número entre 1 y 100: ");
    }

    var cell = document.getElementById('entrada1');

    var cell2 = document.getElementById('resultado');


    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Introduce un número: "));
        while (isNaN(num)) {
            num = parseInt(prompt("Error: Vuelve Introduce un número: "));
        }
        
        cell.innerHTML += num + "<br>";
        cell2.innerHTML += num + " ";
    }

    

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}