import Usuarios from "../models/Usuarios.js";

export async function crearUsuario (req,res){
    let usuarioBody = req.body;
   
     let crearUsuario = new Usuarios(req.body);
     try{
     /* Debemos encriptar la contraseña */
      crearUsuario.password = await Usuarios.encriptaPassword(crearUsuario.password);
    
      /* Guardo en la base de datos */
      const nuevoUsuario = await Usuarios.create(crearUsuario);
    
      res.status(200).json({
        _id: nuevoUsuario._id,
        nombre: nuevoUsuario.nombre,
        email: nuevoUsuario.email,
      });
    }catch(error){
        res.status(500).json("error");
    }  

}

export async function loginUsuario (req,res){
  /*try{
    let correo = req.body.correo;
    let password=req.body.password;
    let usuario = await Usuarios.find({correo:correo})
    console.log(usuario)
    res.status(200).json(usuario);
  }catch(error){
  console.log(error)
    res.status(500).json("Error")
  }*/
  try {
    let correo = req.body.correo;
    let password = req.body.password;

    // Find the user by email
    let usuario = await Usuarios.findOne({ correo: correo });

    if (!usuario) {
      // If user not found
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await Usuarios.comparaPassword(password, usuario.password);

    if (passwordMatch) {
      // Passwords match, login successful
      res.status(200).json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
      });
    } else {
      // Passwords do not match, login failed
      res.status(401).json({ error: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}