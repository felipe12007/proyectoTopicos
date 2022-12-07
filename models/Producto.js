const mongoose = require('mongoose');


const ProductoSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    proveedor:{
        type:mongoose.Types.ObjectId,
        ref:"Proveedor"
    }
});

module.exports = mongoose.model("Producto", ProductoSchema);