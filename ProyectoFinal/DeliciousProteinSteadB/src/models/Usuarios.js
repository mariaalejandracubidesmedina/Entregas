import mongoose from "mongoose";

const usuario = new mongoose.Schema({
    nombre :{
        required: true,
        type : String
    },
    apellido :{
        required: true,
        type : String
    },
    telefono :{
        required: true,
        type : String
    },
    correo :{
        required: false,
        type : String
    },
    contraseña :{
        required: false,
        type : String
    }
});
//export dafault mongosse.model('Usuario',usuario)