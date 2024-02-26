
import { Router } from "express";
import {
    listarProgramacion,
    RegistrarProgramacion,
    ActualizarProgramacion,
    DesactivarProgramacion,
    BuscarProgramacion,
} from "../controllers/programarcion.controller.js";

const rutaProgramacion = Router();


rutaProgramacion.get("/listarProgramacion", listarProgramacion);
rutaProgramacion.post("/RegistrarProgramacion", RegistrarProgramacion);
rutaProgramacion.put("/ActualizarProgramacion", ActualizarProgramacion);
rutaProgramacion.get("/BuscarProgramacion", BuscarProgramacion);
rutaProgramacion.put("/desactivar",DesactivarProgramacion)

export { rutaProgramacion };