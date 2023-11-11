import {Router} from "express";
import {crearUsuario, loginUsuario} from "../controllers/user.controller.js";

const router = Router();

router.post('/users/create',crearUsuario)
router.post('/users/login',loginUsuario)

export default router