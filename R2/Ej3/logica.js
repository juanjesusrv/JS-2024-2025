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
var coordenada = [0, 1];
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



var fila = prompt("Introduce la fila: ");

while (fila < 1 || fila > 3) {
    fila = prompt("Introduce una fila valida: ");
}

var columna = prompt("Introduce la columna: ");

while (columna < 1 || columna > 3) {
    columna = prompt("Introduce una columna valida: ");
}

coordenada[0]