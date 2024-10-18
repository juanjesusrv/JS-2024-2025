

function ej() { //Función para el ejercicio 12

    // Ejercicio 12. Realiza una aplicación web dónde se solicite por pantalla,
    // mediante una ventana emergente, al usuario una secuencia de números enteros.

    // Adicionalmente, la aplicación pedirá al usuario un número comprendido del 1 al 100 que determinará la cantidad de números
    // de la secuencia mencionada. Tras ello se leerán X números en las próximas X ventanas emergentes.

    // La aplicación mostrará en la parte destinada para tal efecto, el número más alto y el más bajo, cada uno en una línea distinta.
    
    let n = prompt("Introduce la cantidad de numeros de la secuencia: ");
    let mayor = 0;
    let menor = 0;

    while (n != parseInt(n)) {
        n = prompt("Introduce un número: ");
    }

    var cell = document.getElementById('entrada1');


    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Introduce un número: "));
        while (isNaN(num)) {
            num = parseInt(prompt("Error: Vuelve Introduce un número: "));
        }
        if (i == 0) {
            mayor = num;
            menor = num;
        console.log(mayor);
        console.log(menor);
        }else{
        if (num > mayor) {
                mayor = num;
                console.log(mayor);
        }
        else if (num < menor) {
                menor = num;
                console.log(menor);
        }
    }
        cell.innerHTML += num + "<br>";
    }

    var cell = document.getElementById('resultado');
    cell.innerHTML = "Mayor: " + mayor + "<br>Menor: " + menor;

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}