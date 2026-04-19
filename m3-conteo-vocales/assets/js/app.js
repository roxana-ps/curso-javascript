// Solicitar cantidad de palabras
let cantidad = parseInt(prompt("¿Cuántas palabras desea ingresar?"));

// Arreglo para guardar palabras
let palabras = [];

// Ingresar palabras
for (let i = 1; i <= cantidad; i++) {
    let palabra = prompt("Ingrese la palabra " + i + ":");
    palabras.push(palabra);
}

// Función para contar vocales
const contarVocales = function (texto) {

    let total = 0;
    let vocales = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < texto.length; i++) {

        let letra = texto[i].toLowerCase();

        if (vocales.includes(letra)) {
            total++;
        }
    }

    return total;
};

// Unir palabras en una sola cadena
let textoCompleto = palabras.join("");

// Contar vocales totales
let cantidadVocales = contarVocales(textoCompleto);

// Mostrar resultados
console.log("Palabras ingresadas: " + palabras.join(", "));
console.log("Cantidad total de vocales: " + cantidadVocales);

alert("Cantidad total de vocales: " + cantidadVocales);

document.getElementById("resultado").innerHTML =
    "<p><strong>Palabras ingresadas:</strong> " + palabras.join(", ") + "</p>" +
    "<p><strong>Total de vocales:</strong> " + cantidadVocales + "</p>";