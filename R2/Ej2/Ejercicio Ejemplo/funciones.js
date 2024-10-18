function longitudArray(array) {
    len = 0
    array.forEach(element => {
        len++;    
    });
    return len;
}

function mostrarArray(array){
    var cadena = "";
    array.forEach(element => {
        cadena += element + " ";
    });
    return cadena;
}

function introducirNum(){
    var num = prompt("Introduce un número: ");
    return array[longitudArray(array)] = num;
}



