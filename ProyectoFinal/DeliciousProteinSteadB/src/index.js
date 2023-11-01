import express from "express";
import dotenv from "dotenv";//guarda variables que no se guarden en codigo
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()

function  startServer(){
    /*CONFIGURACION BASE DE DATOS */
    //Url de conexion
    const url = process.env.URL
    mongoose.connect(url)


    const database = mongoose.connection
    database.on('error',(error)=>{
        console.log('No se puede conectar a la base');
    })

    database.once('connected',()=>{
        console.log("Conexion exitosa")
    })

    /*CONFIGURACION DE SERVIDOR */

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended : false}))
    app.listen(process.env.PORT)
    console.log("se inicio el servidor en http://localhost:3000/")
}

startServer()