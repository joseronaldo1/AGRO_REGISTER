// Produccion.route.js
import { Router } from "express";
import { RegistrarProduccion, listarProduccion, ActualizarProduccion, DesactivarProduccion, BuscarProduccion } from "../controllers/Produccion.controller.js";

const rutaDeProduccion = Router()

//localhost:4000/VariedadCultivo
rutaDeProduccion.get("/listarProduccion", listarProduccion)
rutaDeProduccion.post("/RegistrarProduccion", RegistrarProduccion)
rutaDeProduccion.put("/actualizarProduccion", ActualizarProduccion)
rutaDeProduccion.delete("/desactivarProduccion", DesactivarProduccion);
rutaDeProduccion.get("/buscarProduccion", BuscarProduccion);

export default rutaDeProduccion;