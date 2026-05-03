const URL = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10";

// CACHE para la optimización
let personajesCache = null;


// 1. OBTENER PERSONAJES
function obtenerPersonajes() {

    // Si ya están en memoria, NO llama a la API
    if (personajesCache) {
        console.log("Usando datos en memoria...");
        mostrarLista(personajesCache);
        return;
    }

    console.log("Llamando a la API...");

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log("Datos recibidos desde la API:");
            console.log(data); // 👈 ESTE es el importante
            personajesCache = data; // guardamos en memoria
            mostrarLista(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}


// MOSTRAR LISTA
function mostrarLista(personajes) {
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    personajes.forEach(p => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>ID:</strong> ${p.id}</p>
            <p><strong>Nombre:</strong> ${p.name}</p>
            <p><strong>Especie:</strong> ${p.species}</p>
            <hr>
        `;
        contenedor.appendChild(div);
    });
}


// 2. AGRUPAR POR ESPECIE
function agruparPorEspecie() {

    if (!personajesCache) {
        alert("Primero debes obtener los personajes");
        return;
    }

    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    // Agrupar con reduce
    const grupos = personajesCache.reduce((acc, personaje) => {
        if (!acc[personaje.species]) {
            acc[personaje.species] = [];
        }
        acc[personaje.species].push(personaje);
        return acc;
    }, {});

    // Ordenar especies
    const especiesOrdenadas = Object.keys(grupos).sort();

    especiesOrdenadas.forEach(especie => {
        const div = document.createElement("div");

        let html = `<h3>${especie}</h3><ul>`;

        grupos[especie].forEach(p => {
            html += `<li>${p.name} (ID: ${p.id})</li>`;
        });

        html += "</ul>";

        div.innerHTML = html;
        contenedor.appendChild(div);
    });
}


// 3. FICHA DE PERSONAJE
function mostrarFicha() {

    if (!personajesCache) {
        alert("Primero debes obtener los personajes");
        return;
    }

    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = "";

    // personaje ID 6
    const personaje = personajesCache.find(p => p.id === 6);

    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
        <h2>${personaje.name}</h2>
        <p><strong>ID:</strong> ${personaje.id}</p>
        <p><strong>Especie:</strong> ${personaje.species}</p>
        <img src="${personaje.image}" alt="${personaje.name}">
    `;

    contenedor.appendChild(div);
}
