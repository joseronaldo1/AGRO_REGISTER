import { Router } from "express";
import { validarActividadC} from "../../validate/actividad.js";
import {  RegistrarActividad, ActualizarActividad, DesactivarActividad, BuscarActividad, listarActividad  } from "../controllers/actividad.controller.js";

const rutaActividad = Router();


rutaActividad .post("/RegistrarActividad", validarActividadC,RegistrarActividad);
rutaActividad .put("/ActualizarActividad/:id_actividad", ActualizarActividad);
rutaActividad .post("/DesactivarActividad/Actividad/:id_actividad", DesactivarActividad);
rutaActividad .get("/BuscarActividad/:id_actividad", BuscarActividad);
rutaActividad .get("/listarActividad", listarActividad);

export default rutaActividad ;