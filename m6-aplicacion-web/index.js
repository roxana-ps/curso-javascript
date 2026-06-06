const express = require("express");
const { engine } = require("express-handlebars");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine(
    "handlebars",
    engine({
        helpers: {
            mayusculas: function (texto) {
                return texto.toUpperCase();
            }
        }
    })
);

app.set("view engine", "handlebars");

const tienda = "MiniShop";

const mensaje = "Bienvenido a nuestra tienda";

const productos = [

    {
        nombre: "Camiseta Básica",
        precio: 15,
        disponible: true
    },

    {
        nombre: "Pantalón Jeans",
        precio: 30,
        disponible: false
    },

    {
        nombre: "Zapatos Deportivos",
        precio: 50,
        disponible: true
    }

];

app.get("/", (req, res) => {

    res.render("home", {

        layout: "main",

        tienda,

        mensaje,

        productos

    });

});

app.get("/about", (req, res) => {

    res.render("about", {

        layout: "main"

    });

});

app.get("/contact", (req, res) => {

    res.render("contact", {

        layout: "main"

    });

});

app.post("/contact", (req, res) => {

    res.render("success", {

        layout: "main",

        nombre: req.body.nombre

    });

});

app.put("/", (req, res) => {

    res.status(405).send("Método no permitido");

});

app.delete("/", (req, res) => {

    res.status(405).send("Método no permitido");

});

app.listen(3000, () => {

    console.log("Servidor iniciado");

});