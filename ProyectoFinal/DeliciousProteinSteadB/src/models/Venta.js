import mongoose from "mongoose";

const venta = new mongoose.Schema({    
    
    valor_total :{
        required: true,
        type : String
    },  
     cantidad_compra :{
        required: true,
        type : String
    },   
     fecha_compra :{
        required: true,
        type : Date
    }, 
    Usuario: [{ type: mongoose.Schema.Types.ObjectId, ref: "Usuario" }],
    Producto: [{ type: mongoose.Schema.Types.ObjectId, ref: "Producto" }],
});
export default mongoose.model('venta',venta)