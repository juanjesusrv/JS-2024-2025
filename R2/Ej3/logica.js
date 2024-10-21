// Implementa el juego del buscaminas en JS.
//  1. Definir un tablerro, en un array en 3x3, con bomba cajas sin abrir (Buscar el caracter especial para los iconos)
//  2. A continuacion el usuario introducirá una coordenada. Por ejemplo 3,4
//  3. El programa mostrará si dicha cordenada está vacía o contiene una mina.
//     Cambiando el tablero por dicha acción.
//  4. NO SE PUEDEN USAR FUNCIONES.
//  5. No se puede volver a abrir una caja ya abierta.
//  6. Si el usuario ha encontrado todas las cajas sin minar, mostrará un mensaje de felicitación.
//  7. Si el usuario ha encontrado una mina, mostrará un mensaje de que ha perdido.

// Iconos 💣 📦 🚩

// Variables globales
var coordenada = pedirCoordenadas();
var tablero = [
    ["📦", "📦", "💣"],
    ["📦", "💣", "📦"],
    ["📦", "📦", "📦"]
];

var tableroUsuario = [
    ["📦", "📦", "📦"],
    ["📦", "📦", "📦"],
    ["📦", "📦", "📦"]
];

//Mostrar al usuario el tablero con window.alert
mostrarTablero(tableroUsuario);


function pedirCoordenadas() { //Funcion para pedir las coordenadas al usuario y comprobar que son correctas
    var fila = prompt("Introduce la fila: ");

    while (fila < 1 || fila > 3) {
        fila = prompt("Introduce una fila valida: ");
    }

    var columna = prompt("Introduce la columna: ");

    while (columna < 1 || columna > 3) {
        columna = prompt("Introduce una columna valida: ");
    }

    coordenada[0] = fila;
    coordenada[1] = columna;

    return coordenada;
}

function mostrarTablero(tableroUsuario) {
    var tablero = "";
    for (var i = 0; i < tableroUsuario.length; i++) {
        for (var j = 0; j < tableroUsuario[i].length; j++) {
            tablero += tableroUsuario[i][j] + " ";
        }
        tablero += "\n";
    }
    alert(tablero);
}

function abrirCaja(tablero, tableroUsuario, coordenada) {
    var fila = coordenada[0];
    var columna = coordenada[1];

    if (tablero[fila - 1][columna - 1] === "💣") {
        alert("Has perdido");
    } else {
        tableroUsuario[fila - 1][columna - 1] = tablero[fila - 1][columna - 1];
    }
}

function comprobarTablero(tableroUsuario) {
    for (var i = 0; i < tableroUsuario.length; i++) {
        for (var j = 0; j < tableroUsuario[i].length; j++) {
            if (tableroUsuario[i][j] === "📦") {
                return false;
            }
        }
    }
    return true;
}

function celdaPulsada(tablero, tableroUsuario, coordenada) {
    abrirCaja(tablero, tableroUsuario, coordenada);
    mostrarTablero(tableroUsuario);
    if (comprobarTablero(tableroUsuario)) {
        alert("Has ganado");
    }
}
