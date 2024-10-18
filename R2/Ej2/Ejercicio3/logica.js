function ej() { //Función para el ejercicio 1

    let valor1 = prompt("Introduce el sueldo: "); 
    let valor2 = prompt("Introduce los años de antigüedad: "); 


    
    var cell = document.getElementById('entrada1'); 
    cell.innerHTML = valor1; 

    var cell = document.getElementById('entrada2'); 
    cell.innerHTML = valor2; 

    var cell = document.getElementById('resultado'); 
    

    if (valor1 < 500 && valor2 >= 10) { //Si el sueldo es menor que 500 y los años de antigüedad son mayores o iguales a 10
       cell.innerHTML = valor1 * 3; //El resultado será el sueldo multiplicado por 3
    } else if (valor1 < 500 && valor2 < 10) { //Si el sueldo es mayor o igual a 500 y los años de antigüedad son menores a 10
        cell.innerHTML = valor1 * 2; //El resultado será el sueldo multiplicado por 2
    } else if (valor1 >= 500) { //Si el sueldo es mayor o igual a 500
        cell.innerHTML = valor1; //El resultado será el sueldo
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