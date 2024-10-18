

function ej() { 
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
        'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let nif = prompt("Introduce tu NIF: ");

    while (nif.length != 8 | isNaN(nif)) {
        nif = prompt("Introduce un NIF válido: ");
    }

    let letraCorrectaIndice = nif % 23;
    let letraCorrecta = letras[letraCorrectaIndice];

    let letra = prompt("Introduce la letra: ");

    while (letra.length != 1 | letra != letra.toUpperCase() | /^[a-zA-Z]+$/.test(letra) == false) {
        letra = prompt("Introduce una letra válida: ");
    }

    var cell = document.getElementById('entrada1');
    var cell2 = document.getElementById('resultado');
        
    cell.innerHTML = nif + "<br>" + letra;
    if (letra == letraCorrecta) {
        cell2.innerHTML += "El DNI: " + nif + letra + " introducido es correcto";
    } else {
        cell2.innerHTML += "El DNI: " + nif + letra + " introducido es incorrecto";
    }
    

    

    
}

function reiniciar() { //Función para reiniciar los valores
    var cell = document.getElementById('entrada1'); //Cogemos el elemento con el id entrada1
    cell.innerHTML = ''; //Le asignamos un valor vacío

    var cell = document.getElementById('resultado'); //Cogemos el elemento con el id resultado
    cell.innerHTML = ''; //Le asignamos un valor vacío
}