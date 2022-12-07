const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended:true}));
app.use(cors());

// DATO !!!!
//npm i cors -- para desplegar datos en front
// app.use(cors())

const ProveedorRouter = require("./router/ProveedorRouter");
const ProductoRouter = require("./router/ProductoRouter");


//ENRUTADO
app.use("/api", ProveedorRouter);
app.use("/api", ProductoRouter);

//Conexion BD.
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/inventario').
then(db => console.log("Conectado a BD")). 
catch(err => console.log("Error al conectarse a la BD"));


app.listen(5000, () => {
    console.log("Server is running on port 5000");
})


