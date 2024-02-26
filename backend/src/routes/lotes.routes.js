import { Router } from "express";
import { listarTodo, registrar, Actualizar,Buscar, Desactivar } from "../controllers/lotes.controller.js";

const rutasdelotes = Router()

//localhost:3000/lotes
rutasdelotes.get("/lotes", listarTodo)
rutasdelotes.post("/lotes", registrar)
rutasdelotes.put("/lotes/desactivar/:id", Desactivar)
rutasdelotes.put("/lotes/:id", Actualizar)
rutasdelotes.get("/lotes/:id", Buscar)


export default rutasdelotes;