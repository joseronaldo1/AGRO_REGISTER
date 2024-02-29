import { Router } from "express";
import {listarTodo, registrar, Actualizar, Buscar, Desactivar} from "../controllers/usuarios.controller.js";

import { validarUsuarioC } from "../validate/usuarios.js";
import { validarUsuarioA } from "../validate/usuarios.js";

const rutasdeusuarios = Router()

//localhost:3000/usuarios
rutasdeusuarios.get("/usuarios", listarTodo)
rutasdeusuarios.post("/usuarios",validarUsuarioC, registrar)
rutasdeusuarios.put("/usuarios/desactivar/:id", Desactivar)
rutasdeusuarios.put("/usuarios/:id",validarUsuarioA, Actualizar)
rutasdeusuarios.get("/usuarios/:id", Buscar)


export default rutasdeusuarios