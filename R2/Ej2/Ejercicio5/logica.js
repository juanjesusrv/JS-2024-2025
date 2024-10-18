

function ej() { 
    let numHoras = prompt("Introduce el número de horas trabajadas: "); //Pedimos al usuario que introduzca su calificación numérica 
    let valor2 = prompt("Introduce el precio por hora: "); //Pedimos al usuario que introduzca su calificación numérica 

    var cell = document.getElementById('entrada1'); 
    cell.innerHTML = numHoras; 

    var cell = document.getElementById('entrada2'); 
    cell.innerHTML = valor2; 

    

    if (numHoras <= 35) { 
       var sueldoBruto = numHoras * valor2; 
    } else if (numHoras > 35) {
        var sueldoBruto = (numHoras - 35)/**  Calcular las horas extras */ * 
        (valor2 * 1.5)/** Calcular el valor de las horas extras*/   + 
        (35 * valor2)/** Sumar las otras 35 horas */; 
    }

    var part1, part2, part3;

    if (sueldoBruto <= 500) {
        part1 = sueldoBruto;
        part2 = 0;
        part3 = 0;
    } else if (sueldoBruto <= 900) {
        part1 = 500;
        part2 = (sueldoBruto - 500) * 0.75;
        part3 = 0;
    } else {
        part1 = 500;
        part2 = 400 * 0.75;
        part3 = (sueldoBruto - 900) * 0.55;
    }  

    var cell = document.getElementById('resultado'); 
    var sueldoNeto = part1 + part2 + part3;

    cell.innerHTML = sueldoNeto;

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío
    var cell = document.getElementById('entrada2'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}