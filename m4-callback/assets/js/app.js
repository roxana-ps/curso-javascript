// 1. VALIDAR NÚMERO
function validar_numero(callback) {
    let dato = prompt("Ingrese un número:");

    if (!isNaN(dato) && dato.trim() !== "") {
        callback(true, dato);
    } else {
        callback(false, dato);
    }
}

// Callback para validación de número
function mostrarResultadoValidacion(esValido, dato) {
    if (esValido) {
        console.log("Correcto: ingresó un número válido (" + dato + ")");
    } else {
        console.log("Error: Usted ingresó caracteres incorrectos");
    }
}

// Función para ejecutar
function ejecutarValidacion() {
    validar_numero(mostrarResultadoValidacion);
}
//Fin primer ejercicio

// 2. SUMATORIA DE IMPARES CON RETARDO
function calcular_y_avisar_despues(numero, callback) {
    numero = parseInt(numero);

    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            suma += i;
        }
    }

    setTimeout(() => {
        callback(suma);
    }, 5000);
}

// Callback
function mostrarResultadoImpares(resultado) {
    console.log("El valor de la sumatoria es " + resultado + ". Este resultado se obtuvo hace 5 segundos.");
}

// Función para ejecutar
function ejecutarImpares() {
    let numero = prompt("Ingrese un número:");
    if (!isNaN(numero) && numero.trim() !== "") {
        calcular_y_avisar_despues(numero, mostrarResultadoImpares);
    } else {
        console.log("Error: número inválido");
    }
}
//Fin segundo ejercicio

// 3. SUMATORIAS SUCESIVAS
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
    numero = parseInt(numero);

    let sumaTotal = 0;
    let acumulador = 0;

    for (let i = 1; i <= numero; i++) {
        acumulador += i;
        sumaTotal += acumulador;
    }

    if (sumaTotal < 1000) {
        callback(sumaTotal);
    } else {
        callback_error(sumaTotal);
    }
}

// Callback éxito
function mostrarResultadoSumatorias(resultado) {
    console.log("Las sumatorias sucesivas del número es " + resultado);
}

// Callback error
function mostrarErrorSumatorias(resultado) {
    console.log("El número sobrepasa el objetivo de la función. Resultado obtenido: " + resultado);
}

// Función para ejecutar
function ejecutarSumatorias() {
    let numero = prompt("Ingrese un número:");

    if (!isNaN(numero) && numero.trim() !== "") {
        calcular_y_avisar_dependiendo(
            numero,
            mostrarResultadoSumatorias,
            mostrarErrorSumatorias
        );
    } else {
        console.log("Error: número inválido");
    }
}