import { Router } from "express";
import {  RegistrarActividad, ActualizarActividad, DesactivarActividad, BuscarActividad, listarActividad  } from "../controllers/actividad.controller.js";

const router = Router();


router.post("/RegistrarActividad", RegistrarActividad);
router.put("/ActualizarActividad", ActualizarActividad);
router.delete("/DesactivarActividad", DesactivarActividad);
router.get("/BuscarActividad", BuscarActividad);
router.get("/listarActividad", listarActividad);

export default router;