import { Router } from "express";
import { validationResult } from "express-validator";
import {
    listarAsignaciones,
    registrarAsignacion,
    buscarAsignacion,
    Desactivar,
    Actualizar,
} from "../controllers/asignar.controller.js";
import { validaAsignacion } from "../validate/Asignacion.js";
import { ActualiazaAsignacion } from "../validate/Asignacion.js";

const rutaAsignaciones = Router();

rutaAsignaciones.get("/listarAsignaciones", listarAsignaciones);
rutaAsignaciones.post("/registrarAsignacion", validaAsignacion, registrarAsignacion);
rutaAsignaciones.put("/actualizarAsignacion/:id_asignacion", ActualiazaAsignacion, Actualizar);
rutaAsignaciones.get("/buscarAsignacion/:fecha_asignacion", buscarAsignacion);
rutaAsignaciones.put("/desactivarAsignacion/:id_asignacion", Desactivar);

export { rutaAsignaciones };
