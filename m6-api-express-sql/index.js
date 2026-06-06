require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/",require("./endpoints/api"));

app.use(express.static("frontend"));

app.listen(process.env.PORT,()=>{

    console.log("Servidor iniciado");

});