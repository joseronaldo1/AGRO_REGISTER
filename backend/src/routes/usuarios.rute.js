import { Router } from "express";
import {listarTodo, registrar, Actualizar, Buscar, Desactivar} from "../controllers/usuarios.controller.js";

const rutasdeusuarios = Router()

//localhost:3000/usuarios
rutasdeusuarios.get("/usuarios", listarTodo)
rutasdeusuarios.post("/usuarios", registrar)
rutasdeusuarios.put("/usuarios/desactivar/:id", Desactivar)
rutasdeusuarios.put("/usuarios/:id", Actualizar)
rutasdeusuarios.get("/usuarios/:id", Buscar)


export default rutasdeusuarios