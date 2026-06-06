const express = require("express");

const router = express.Router();

const conexion = require("../config/database");


//-------------------------------------------------

router.get("/conductores",(req,res)=>{

    conexion.query(

        "SELECT * FROM conductores",

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

    );

});


//-------------------------------------------------

router.get("/automoviles",(req,res)=>{

    conexion.query(

        "SELECT * FROM automoviles",

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

    );

});


//-------------------------------------------------

router.get("/conductoressinauto",(req,res)=>{

    const edad = req.query.edad;

    conexion.query(

        `SELECT *

        FROM conductores

        WHERE edad < ?

        AND nombre NOT IN

        (

        SELECT nombre_conductor

        FROM automoviles

        )`,

        [edad],

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

    );

});


//-------------------------------------------------

router.get("/solitos",(req,res)=>{

    conexion.query(

        `SELECT

        nombre,

        edad,

        NULL as marca,

        NULL as patente

        FROM conductores

        WHERE nombre NOT IN

        (

        SELECT nombre_conductor

        FROM automoviles

        )

        UNION

        SELECT

        NULL,

        NULL,

        marca,

        patente

        FROM automoviles

        WHERE nombre_conductor NOT IN

        (

        SELECT nombre

        FROM conductores

        )`,

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

    );

});


//-------------------------------------------------

router.get("/auto",(req,res)=>{

    if(req.query.patente){

        conexion.query(

        `SELECT

        a.marca,

        a.patente,

        c.nombre,

        c.edad

        FROM automoviles a

        LEFT JOIN conductores c

        ON a.nombre_conductor=c.nombre

        WHERE a.patente=?`,

        [req.query.patente],

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

        );

        return;

    }

    if(req.query.iniciopatente){

        conexion.query(

        `SELECT

        a.marca,

        a.patente,

        c.nombre,

        c.edad

        FROM automoviles a

        LEFT JOIN conductores c

        ON a.nombre_conductor=c.nombre

        WHERE a.patente LIKE ?`,

        [req.query.iniciopatente+"%"],

        (error,resultado)=>{

            if(error){

                return res.status(500).json(error);

            }

            res.status(200).json(resultado);

        }

        );

        return;

    }

    res.status(404).json({

        mensaje:"Debe indicar patente o iniciopatente"

    });

});

module.exports = router;