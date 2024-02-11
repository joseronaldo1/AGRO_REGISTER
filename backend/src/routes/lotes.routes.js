import { Router } from "express";
import { listarTodo, registrar,eliminar, Actualizar,Buscar } from "../controller/lotes.controller.js";

const rutasdelotes = Router()

//localhost:3000/lotes
rutasdelotes.get("/lotes", listarTodo)
rutasdelotes.post("/lotes", registrar)
rutasdelotes.delete("/lotes", eliminar)
rutasdelotes.put("/lotes/:id", Actualizar)
rutasdelotes.get("/lotes/:id", Buscar)


export default rutasdelotes