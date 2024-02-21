import { Router } from "express";
import {  RegistrarActividad, ActualizarActividad, DesactivarActividad, BuscarActividad, listarActividad  } from "../controllers/actividad.controller.js";

const rutaActividad = Router();


rutaActividad .post("/RegistrarActividad", RegistrarActividad);
rutaActividad .put("/ActualizarActividad/:id", ActualizarActividad);
rutaActividad .put("/DesactivarActividad/Actividad/:id", DesactivarActividad);
rutaActividad .get("/BuscarActividad/:id", BuscarActividad);
rutaActividad .get("/listarActividad", listarActividad);

export default rutaActividad ;