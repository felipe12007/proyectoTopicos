const mongoose = require('mongoose');

const ProveedorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Proveedor", ProveedorSchema);