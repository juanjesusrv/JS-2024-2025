function volver() {
    window.location.href = "./index.html";
}


function verEnunciado() {
    let enunciado = "Realiza la logica de programacion para que el usuario introduzca tres valores por teclado si al menos uno \
    de ellos es mayor de 10, mostrar en una ventana emergente \"ALGUNO MAYOR QUE 10\". En caso contrario mostrar \"NINGUNO MAYOR QUE 10";
    document.getElementById("enunciado").innerHTML = enunciado;

    
}

function verResolucion() {
    let resolucion = "La resolución del ejercicio es la siguiente: <br> \
    1. Se pide al usuario que introduzca tres valores por teclado. <br> \
    2. Se comprueba si alguno de los valores introducidos es mayor que 10. <br> \
    3. Si al menos uno de los valores es mayor que 10, se muestra un mensaje en una ventana emergente. <br> \
    4. Si ninguno de los valores es mayor que 10, se muestra otro mensaje en una ventana emergente. <br> \
    5. Fin del programa.";
    
    document.getElementById("resolucion").innerHTML = resolucion;

}

function verActividad1() {
    let actividad1 = "fuction comprobar () { <br> \
        let valor1 = prompt(\"Introduce el primer valor\");<br> \
        let valor2 = prompt(\"Introduce el segundo valor\");<br> \
        let valor3 = prompt(\"Introduce el tercer valor\");<br> \
        if (valor1 > 10 || valor2 > 10 || valor3 > 10) {<br> \
           alert('ALGUNO MAYOR QUE 10');<br> \
        } else {<br> \
           alert('NINGUNO MAYOR QUE 10');<br> \
        }<br> \
    }";

    document.getElementById("actividad1").innerHTML = actividad1;
}

function comprobar() {
    let valor1 = prompt("Introduce el primer valor");
    let valor2 = prompt("Introduce el segundo valor");
    let valor3 = prompt("Introduce el tercer valor");

    if (valor1 > 10 || valor2 > 10 || valor3 > 10) {
        window.alert("ALGUNO MAYOR QUE 10");
    } else {
        window.alert("NINGUNO MAYOR QUE 10");
    }
}