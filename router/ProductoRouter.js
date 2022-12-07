const express = require('express');
const ProductoRouter = express.Router();

// Importar modelo de la BD.
const Producto = require("../models/Producto");

// Lista de productos
ProductoRouter.get("/producto", async (req,res) => {
    let producto = await Producto.find({});
    return res.status(200).send({
        success: true,
        producto,
    });
});

// Crear un Producto.
ProductoRouter.post("/producto", async (req,res) => {
    try {
        const {id, name, precio, proveedor} = req.body;
        if(!id || !name || !precio || !proveedor){
            return res.status(400).send({
                success: false,
                message: "Faltan datos por completar."
            })
        }
        let producto = new Producto(req.body);
        await Producto.insertMany(producto);
        return res.status(200).send({
            success: true,
            message: "Producto creado correctamente!",
            producto,
        });
        
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
    }
});

// Devolver un solo Producto.
ProductoRouter.get("/producto/:id", async (req,res) => {
    try {
        const id = req.params.id;
        let producto = await Producto.findOne({id:id}).populate({path:"proveedor", select:"name"});

        if(!producto){
            return res.status(404).send({
                success: false, 
                message: "Producto NO Encontrado!"
            })
        }
        return res.status(200).send({
            success: true,
            message: "Producto Encontrado!",
            producto
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
});

// Actualizar un Producto.
ProductoRouter.put("/updateProducto/:id", async (req,res) => {
    const {id} = req.params;
    const {precio} = req.body;

    let prod = await Producto.findByIdAndUpdate(id,{precio})
    try {
        res.status(200).send({
            success: true,
            message: "Producto Actualizado Correctamente.",
            prod
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
});

ProductoRouter.delete("/deleteProducto/:id", async (req,res) => {
    const {id} = req.params;
    await Producto.findByIdAndDelete(id);
    try {
        res.status(200).send({
            success: true,
            message: "Producto eliminado correctamente!"
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: error.message
        });
    }
});

module.exports = ProductoRouter;