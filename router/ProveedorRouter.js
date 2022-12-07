const express = require('express');
const ProveedorRouter = express.Router();

// Importar modelo de la BD.
const Proveedor = require("../models/Proveedor");

// Lista de Proveedores.
ProveedorRouter.get("/proveedor", async (req,res) => {
    let proveedores = await Proveedor.find({})
    return res.status(200).send({
        success: true,
        proveedores,
    });
});

// Crear un Proveedor.
ProveedorRouter.post("/proveedor", async (req,res) => {
    try{
        const {name, address, phone} = req.body
        if(!name || !address || !phone){
            return res.status(400).send({
                success: false,
                message: "Faltan datos por completar."
            })
        }
        let proveedor = new Proveedor(req.body);
        await Proveedor.insertMany(proveedor);
        return res.status(200).send({
            success: true,
            message: "Proveedor creado correctamente!",
            proveedor,
        });

    } catch (error){
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
});

// Devolver un solo Proveedor.
ProveedorRouter.get("/proveedor/:id", async (req,res) => {
    try {
        const {id} = req.params;
        let proveedor = await Proveedor.findById(id);

        if(!proveedor){
            return res.status(404).send({
                success: false,
                message: "Proveedor NO encontrado!"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Proveedor Encontrado!",
            proveedor
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
});

// Actualizar un Proveedor.
ProveedorRouter.put("/updateProveedor/:id", async (req,res) => {
    const {id} = req.params;
    const {address} = req.body;

    let prov = await Proveedor.findByIdAndUpdate(id,{address})
    try {
        res.status(200).send({
            success: true,
            message: "Proveedor Actualizado Correctamente.",
            prov,
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
});

// Eliminar un Proveedor.
ProveedorRouter.delete("/deleteProveedor/:id", async (req,res) => {
    const {id} = req.params;
    await Proveedor.findByIdAndDelete(id);
    try {
        res.status(200).send({
            success: true,
            massage:"Proveedor eliminado correctamente!"
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            massage: error.message
        });
    }
});

module.exports = ProveedorRouter;