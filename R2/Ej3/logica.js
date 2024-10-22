// Implementa el juego del buscaminas en JS.
//  1. Definir un tablerro, en un array en 3x3, con bomba cajas sin abrir (Buscar el caracter especial para los iconos)
//  2. A continuacion el usuario introducirá una coordenada. Por ejemplo 3,4
//  3. El programa mostrará si dicha cordenada está vacía o contiene una mina.
//     Cambiando el tablero por dicha acción.

//  5. No se puede volver a abrir una caja ya abierta.
//  6. Si el usuario ha encontrado todas las cajas sin minar, mostrará un mensaje de felicitación.
//  7. Si el usuario ha encontrado una mina, mostrará un mensaje de que ha perdido.

// Iconos 💣 📦 🚩

// Variables globales

const tablero = [
    ["A", "A", "B"],
    ["A", "B", "A"],
    ["A", "A", "A"]
];

let tableroUsuario = [
    ["C", "C", "C"],
    ["C", "C", "C"],
    ["C", "C", "C"]
];


/** Comenzar el juego*/
while (!comprobarTablero(tableroUsuario)) {
    var coordenada = [];

    pedirCoordenadas();
    celdaPulsada(tablero, tableroUsuario, coordenada);

}


//Comprobar si el tablero esta completo
function pedirCoordenadas() { //Funcion para pedir las coordenadas al usuario y comprobar que son correctas
    let fila = prompt("Introduce la fila: ");

    while (fila < 1 || fila > 3) {
        fila = prompt("Introduce una fila valida: ");
    }

    let columna = prompt("Introduce la columna: ");

    while (columna < 1 || columna > 3) {
        columna = prompt("Introduce una columna valida: ");
    }

    coordenada[0] = fila;
    coordenada[1] = columna;

    return coordenada;
}

/** Función para mostrar el tablero */
function mostrarTablero(tableroUsuario) {
    var tableroAux = "";
    for (var i = 0; i < tableroUsuario.length; i++) {
        for (var j = 0; j < tableroUsuario[i].length; j++) {
            if (tableroUsuario[i][j] === "C") {
                tableroAux += "📦";
            } else if (tableroUsuario[i][j] === "A") {
                tableroAux += "🚩";
            } else if (tableroUsuario[i][j] === "B") {
                tableroAux += "💣";
            }
        }
        tableroAux += "\n";
    }
    alert(tableroAux);
}

/** Función para abrir una caja */
function abrirCaja(tablero, tableroUsuario, coordenada) {
    let filaAux = coordenada[0];
    let columnaAux = coordenada[1];

    if (tablero[filaAux - 1][columnaAux - 1] === "B") {
        tableroUsuario[filaAux - 1][columnaAux - 1] = "B";
    } else {
        tableroUsuario[filaAux - 1][columnaAux - 1] = "A";
    }
}


/** Función para comprobar si el tablero esta completo */
function comprobarTablero(tableroUsuario) {

    for (let i = 0; i < tableroUsuario.length; i++) {
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            
            if (tableroUsuario[i][j] === "B") {
                alert("Has perdido");
                return true;
            }
        }
    }
    return false;
}


/** Función para elegir una celda, coomprobar si es una bomba o no,  mostrat el tablero y por ultimo comprobar si el tablero esta completo */
function celdaPulsada(tablero, tableroUsuario, coordenada) {
    abrirCaja(tablero, tableroUsuario, coordenada);
    mostrarTablero(tableroUsuario);
}

function pintarHTML() {
    let tabla = "<table>";
    for (let i = 0; i < tableroUsuario.length; i++) {
        tabla += "<tr>";
        for (let j = 0; j < tableroUsuario[i].length; j++) {
            tabla += "<td>" + tableroUsuario[i][j] + "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    document.getElementById("tablero").innerHTML = tabla;
}

function actualizarHTML() {
    pintarHTML();
    if (comprobarTablero(tableroUsuario)) {
        alert("Has ganado");
    }
}