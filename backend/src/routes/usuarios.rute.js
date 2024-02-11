import { Router } from "express";
import {listarTodo, registrar, eliminar, Actualizar, Buscar} from "../controller/usuarios.controller.js";

const rutasdeusuarios = Router()

//localhost:3000/usuarios
rutasdeusuarios.get("/usuarios", listarTodo)
rutasdeusuarios.post("/usuarios", registrar)
rutasdeusuarios.delete("/usuarios", eliminar)
rutasdeusuarios.put("/usuarios/:id", Actualizar)
rutasdeusuarios.get("/usuarios/:id", Buscar)


export default rutasdeusuarios