# Actividad 2 - Node.js + Express + MySQL

## Requisitos

- Node.js instalado.
- MySQL instalado y en ejecución.
- Base de datos creada e importada desde el archivo `actividad2.sql`.

---

## Instalación

1. Clonar o descomprimir el proyecto.

2. Abrir una terminal en la carpeta del proyecto.

3. Instalar las dependencias:

```bash
npm install express mysql2 cors dotenv
```

4. Configurar el archivo `.env` con los datos de conexión a MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASS=TU_PASSWORD
DB_NAME=actividad2

PORT=3000
```

5. Crear la base de datos `actividad2` e importar el archivo `actividad2.sql`.

---

## Ejecutar el servidor

Desde la terminal ejecutar:

```bash
node index.js
```

Si todo está correcto aparecerán los mensajes:

```
Servidor iniciado
Base de datos conectada
```

---

## Ejecutar el cliente

Abrir un navegador web e ingresar a:

```
http://localhost:3000
```

Desde la página se pueden ejecutar las consultas disponibles mediante los botones.

---

## Endpoints disponibles

- GET /conductores
- GET /automoviles
- GET /conductoressinauto?edad=30
- GET /solitos
- GET /auto?patente=HXJH55
- GET /auto?iniciopatente=H

Todos los servicios responden en formato JSON.