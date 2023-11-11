import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
    password :{
        required: false,
        type : String
    },
    rol :{
        required: true,
        type : String
    },
    
});

usuario.statics.encriptaPassword = async (password)=>{
    const salt = await bcrypt.genSalt(10) //cantidad de rondas que va a dar el encriptado a mi password
    return await bcrypt.hash(password,salt) //=> 153asd46wer6asfg (devuelve algo encriptado)
    }
    
    usuario.statics.comparaPassword = async (password, recibePassword)=>{
    return await bcrypt.compare(password, recibePassword)  //=> true o false
    }

export default mongoose.model('Usuario',usuario)