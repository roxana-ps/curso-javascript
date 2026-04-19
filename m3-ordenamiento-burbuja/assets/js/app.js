let numeros = [];
let original = [];

// Ingresar 3 números válidos
for (let i = 1; i <= 3; i++) {
    let valor;

    do {
        valor = parseFloat(prompt("Ingrese el número " + i + ":"));

        if (isNaN(valor)) {
            alert("Debe ingresar un número válido.");
        }

    } while (isNaN(valor));

    numeros.push(valor);
    original.push(valor);
}

// Ordenamiento Burbuja
let cambiado;

do {
    cambiado = false;

    for (let i = 0; i < numeros.length - 1; i++) {

        if (numeros[i] > numeros[i + 1]) {
            let temp = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = temp;
            cambiado = true;
        }

    }

} while (cambiado);

// Mayor y menor
let menor = numeros[0];
let mayor = numeros[numeros.length - 1];

// Crear salida
let salida = "";
salida += "<p><strong>Arreglo original:</strong> " + original.join(", ") + "</p>";
salida += "<p><strong>Arreglo ordenado:</strong> " + numeros.join(", ") + "</p>";

if (menor === mayor) {
    salida += "<p><strong>Los 3 números son idénticos. No hay mayor/menor distintos.</strong></p>";
} else {
    salida += "<p><strong>Menor número:</strong> " + menor + "</p>";
    salida += "<p><strong>Mayor número:</strong> " + mayor + "</p>";
}

// Mostrar con jQuery
$("#contenedor").html(salida);
