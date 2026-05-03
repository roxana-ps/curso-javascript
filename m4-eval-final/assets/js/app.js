class UsuariosAPI {

    constructor() {
        this.usuarios = [];

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

        xhr.onload = () => {
            if (xhr.status === 200) {
                this.usuarios = JSON.parse(xhr.responseText);
                console.log("Datos cargados correctamente:");
                console.log(this.usuarios);
            } else {
                console.log("Error al cargar datos");
            }
        };

        xhr.onerror = () => {
            console.log("Error de conexión");
        };

        xhr.send();
    }


    // 1. Listar nombres
    listarNombres() {
        if (!this.usuarios.length) {
            console.log("Datos aún no cargados");
            return;
        }

        this.usuarios.forEach(u => {
            console.log(u.name);
        });
    }


    // 2. Información básica
    buscarUsuarioBasico() {
        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.usuarios.find(u =>
            u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Username:", usuario.username);
            console.log("Email:", usuario.email);
        } else {
            console.log("Usuario no encontrado");
        }
    }


    // 3. Dirección completa
    buscarDireccion() {
        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.usuarios.find(u =>
            u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Dirección:");
            console.log("Calle:", usuario.address.street);
            console.log("Suite:", usuario.address.suite);
            console.log("Ciudad:", usuario.address.city);
            console.log("Código postal:", usuario.address.zipcode);
            console.log("Geo:", usuario.address.geo.lat, usuario.address.geo.lng);
        } else {
            console.log("Usuario no encontrado");
        }
    }


    // 4. Info avanzada
    buscarInfoAvanzada() {
        const nombre = prompt("Ingrese el nombre del usuario:");

        const usuario = this.usuarios.find(u =>
            u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Teléfono:", usuario.phone);
            console.log("Website:", usuario.website);
            console.log("Compañía:", usuario.company.name);
            console.log("CatchPhrase:", usuario.company.catchPhrase);
            console.log("BS:", usuario.company.bs);
        } else {
            console.log("Usuario no encontrado");
        }
    }


    // 5. Empresas + frase
    listarEmpresas() {
        if (!this.usuarios.length) {
            console.log("Datos aún no cargados");
            return;
        }

        this.usuarios.forEach(u => {
            console.log(u.company.name + " - " + u.company.catchPhrase);
        });
    }


    // 6. Nombres ordenados
    listarOrdenados() {
        if (!this.usuarios.length) {
            console.log("Datos aún no cargados");
            return;
        }

        const nombres = this.usuarios
            .map(u => u.name)
            .sort();

        nombres.forEach(n => console.log(n));
    }
}


// Para que funcionen los botones
const app = new UsuariosAPI();