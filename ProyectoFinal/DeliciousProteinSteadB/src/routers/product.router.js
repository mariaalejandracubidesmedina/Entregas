import {Router} from "express";
import {crearProducto} from "../controllers/products.controller.js";

const router = Router();

router.post('/products/create',crearProducto)

export default router