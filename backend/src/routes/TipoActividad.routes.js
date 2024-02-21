import { Router } from "express";
import { RegistrarTipoActividad, listarTipoActividad,actualizarTipoActividad, desactivarTipoActividad, buscarTipoActividad } from "../controllers/TipoActividad.controller.js";

const rutaDeTipoActividad = Router();

rutaDeTipoActividad.post("/registrarActividad", RegistrarTipoActividad);
rutaDeTipoActividad.get("/listarActividad", listarTipoActividad);
rutaDeTipoActividad.put("/actualizarActividad/:id", actualizarTipoActividad);
rutaDeTipoActividad.put("/desactivar/Actividad/:id", desactivarTipoActividad);
rutaDeTipoActividad.get("/buscarActividad/:id", buscarTipoActividad);

export default rutaDeTipoActividad;
