import { Router } from "express";
import {
    listarAsignaciones,
    registrarAsignacion,
    editarAsignacion,
    buscarAsignacion,
    Desactivar,
} from "../controllers/asignar.controller.js";

const rutaAsignaciones = Router();

rutaAsignaciones.get("/listarAsignaciones", listarAsignaciones);
rutaAsignaciones.post("/registrarAsignacion", registrarAsignacion);
rutaAsignaciones.put("/editarAsignacion", editarAsignacion);
rutaAsignaciones.get("/buscarAsignacion", buscarAsignacion);
rutaAsignaciones.put("/activar",Desactivar);

export { rutaAsignaciones };
