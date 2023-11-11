import mongoose from "mongoose";

const producto = new mongoose.Schema({
    
    tipoProducto :{
        required: true,
        type : String
    },
    nombre :{
        required: true,
        type : String
    },
    valor :{
        required: true,
        type : String
    },  
    
});
export default mongoose.model('Producto',producto)