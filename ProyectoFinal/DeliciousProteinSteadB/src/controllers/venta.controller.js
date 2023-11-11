import Producto from "../models/Productos.js";
import Usuario from "../models/Usuarios.js";
import Venta from "../models/Venta.js";

export async function crearVenta (req,res){
    /*const {
        valor_total,
        cantidad_compra,
        fecha_compra,        
      } = req.body;
    
      const productosFound = await Productos.find({ nombre: { $in: producto } });
      const usuarioFound = await Usuarios.find({ telefono: { usuario } });*/

      /* crear la instancia del usuario */
     /* const venta = new Venta({
        valor_total,
        cantidad_compra,
        fecha_compra, 
        productos: productosFound.map((producto) => producto._id), //=> [new ObjectId("651cb3a8f62c611047c7be57"),new ObjectId("651cb3b5f62c611047c7be59"),]
        usuario: (usuarioFound._id),
    });*/
    
    
      /* Guardo en la base de datos */
      /*const newVenta = venta.save();
    
      res.status(200).json({
        _id: newVenta._id,
        valor_total: newVenta.valor_total,
        cantidad_compra: newVenta.cantidad_compra,
        fecha_compra: newVenta.fecha_compra,
      });*/
      try {
        const {
            valor_total,
            cantidad_compra,
            fecha_compra,
            productos,  // Array of product names
            telefono,   // User's phone number
        } = req.body;

        // Find products based on their names
        const productosEncontrados = await Producto.find({ nombre: { $in: productos } });

        // Find the user based on their phone number
        let usuarioEncontrado = await Usuario.findOne({ telefono });

        // If the user doesn't exist, create a new user
        if (!usuarioEncontrado) {
            const { nombre, apellido, correo, password, rol } = req.body;
            
            // You may want to validate and hash the password here
            const hashedPassword = await Usuario.encriptaPassword(password);

            usuarioEncontrado = new Usuario({
                nombre,
                apellido,
                telefono,
                correo,
                password: hashedPassword,
                rol,
            });

            await usuarioEncontrado.save();
        }

        // Create a new sale instance
        const venta = new Venta({
            valor_total,
            cantidad_compra,
            fecha_compra,
            Usuario: usuarioEncontrado._id,
            Producto: productosEncontrados.map((producto) => producto._id),
        });

        // Save the sale to the database
        const nuevaVenta = await venta.save();

        res.status(200).json({
            _id: nuevaVenta._id,
            valor_total: nuevaVenta.valor_total,
            cantidad_compra: nuevaVenta.cantidad_compra,
            fecha_compra: nuevaVenta.fecha_compra,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
