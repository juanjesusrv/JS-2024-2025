

function ej() { 
    let n = prompt("Introduce la cantidad (Debe ser multiplo de 5): "); 
    let contador500 = 0;
    let contador200 = 0;
    let contador100 = 0;
    let contador50 = 0;
    let contador20 = 0;
    let contador10 = 0;
    let contador5 = 0;

    while (n % 5 != 0 || n != parseInt(n)) {
        n = prompt("Introduce un número multiplo de 5: ");
    }

    var cell = document.getElementById('entrada1');

    cell.innerHTML = n;

    var cell = document.getElementById('resultado'); 
    

    while (n != 0) {
        if (n >= 500) {
            n -= 500;
            contador500++;
        } else if (n >= 200) {
            n -= 200;
            contador200++;
        } else if (n >= 100) {
            n -= 100;
            contador100++;
        } else if (n >= 50) {
            n -= 50;
            contador50++;
        } else if (n >= 20) {
            n -= 20;
            contador20++;
        } else if (n >= 10) {
            n -= 10;
            contador10++;
        } else if (n >= 5) {
            n -= 5;
            contador5++;
        }
    }

    if (contador500 != 0) {
        cell.innerHTML += "<br> Billetes de 500: " + contador500;
    }
    if (contador200 != 0) {
        cell.innerHTML += "<br> Billetes de 200: " + contador200;
    }
    if (contador100 != 0) {
        cell.innerHTML += "<br> Billetes de 100: " + contador100;
    }
    if (contador50 != 0) {
        cell.innerHTML += "<br> Billetes de 50: " + contador50;
    }
    if (contador20 != 0) {
        cell.innerHTML += "<br> Billetes de 20: " + contador20;
    }
    if (contador10 != 0) {
        cell.innerHTML += "<br> Billetes de 10: " + contador10;
    }
    if (contador5 != 0) {
        cell.innerHTML += "<br> Billetes de 5: " + contador5;
    }
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}