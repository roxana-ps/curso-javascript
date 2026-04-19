// Número secreto entre 1 y 10
const secreto = Math.floor(Math.random() * 10) + 1;

// Arreglo para guardar intentos usados
let usados = [];

// Máximo de intentos
let intentos = 3;

// Función para revisar repetidos
function yaUsado(numero, lista) {
    return lista.includes(numero);
}

// Bucle principal del juego
while (intentos > 0) {

    let entrada = prompt("Ingresa un número entre 1 y 10:");
    let numero = parseInt(entrada);

    // Validar número
    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert("Número inválido. Debe ser entre 1 y 10.");
        continue;
    }

    // Validar repetido
    if (yaUsado(numero, usados)) {
        alert("Ese número ya fue ingresado.");
        continue;
    }

    // Guardar intento
    usados.push(numero);

    // Mostrar historial
    document.getElementById("historial").innerHTML =
        "Intentos: " + usados.join(", ");

    console.log("Intentos usados:", usados);

    // Comparar con secreto
    if (numero === secreto) {
        alert("¡Adivinaste! El número era " + secreto);
        break;
    } else {
        intentos--;

        if (intentos > 0) {
            alert("Incorrecto. Te quedan " + intentos + " intentos.");
        } else {
            alert("Sin aciertos. El número era: " + secreto);
        }
    }
}