import { Router } from "express";
import { listarProgramacion, RegistrarProgramacion, ActualizarProgramacion, DesactivarProgramacion, BuscarProgramacion, } from "../controllers/programacion.controllers.js";


const rutaProgramacion = Router();

rutaProgramacion.get("/listarProgramacion", listarProgramacion);
rutaProgramacion.post("/RegistrarProgramacion", RegistrarProgramacion);
rutaProgramacion.put("/ActualizarProgramacion", ActualizarProgramacion);
rutaProgramacion.get("/BuscarProgramacion", BuscarProgramacion);
rutaProgramacion.delete("/desactivarActividad", DesactivarProgramacion);


export { rutaProgramacion };