import { Router } from "express";
import { RegistrarTipoActividad, listarTipoActividad,actualizarTipoActividad, desactivarTipoActividad, buscarTipoActividad, Registrar } from "../controllers/TipoActividad.controller.js";
import { validarTipoActividad } from "../validate/validarTipoActividad.js";
import { validarTipoActividadActualizar } from "../validate/validarTipoActividad.js";
const rutaDeTipoActividad = Router();

rutaDeTipoActividad.post("/registrarActividad",validarTipoActividad, RegistrarTipoActividad);
rutaDeTipoActividad.get("/listarActividad", listarTipoActividad);
rutaDeTipoActividad.put("/actualizarActividad/:id",validarTipoActividadActualizar, actualizarTipoActividad);
rutaDeTipoActividad.put("/desactivar/Actividad/:id", desactivarTipoActividad);
rutaDeTipoActividad.get("/buscarActividad/:id", buscarTipoActividad);

export default rutaDeTipoActividad;
