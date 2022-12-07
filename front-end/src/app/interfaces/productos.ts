export interface productos {
    id:{
        type: String,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    proveedor:{
        type: Object,
    } 
    stock:{
        type: String,
    }
}
