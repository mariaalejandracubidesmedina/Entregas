import {Router} from "express";
import {crearVenta} from "../controllers/venta.controller.js";

const router = Router();

router.post('/ventas/create',crearVenta)

export default router
