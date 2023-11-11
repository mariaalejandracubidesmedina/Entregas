import Productos from "../models/Productos.js";

export async function crearProducto (req,res){
    let productoBody = req.body;
   
     let crearProducto = new Productos(req.body);
     try{
         
      /* Guardo en la base de datos */
      const nuevoProducto = await Productos.create(crearProducto);
    
      res.status(200).json({crearProducto});
    }catch(error){
        res.status(500).json("error");
    }  

}