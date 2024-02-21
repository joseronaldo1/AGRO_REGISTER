// Produccion.route.js
import { Router } from "express";
import { RegistrarProduccion, listarProduccion, ActualizarProduccion, DesactivarProduccion, BuscarProduccion } from "../controllers/Produccion.controller.js";

const rutaDeProduccion = Router()

//localhost:4000/
rutaDeProduccion.get("/listarProduccion", listarProduccion)
rutaDeProduccion.post("/RegistrarProduccion", RegistrarProduccion)
rutaDeProduccion.put("/actualizarProduccion/:id", ActualizarProduccion)
rutaDeProduccion.put("/DesactivarProduccion/Produccion/:id", DesactivarProduccion);
rutaDeProduccion.get("/buscarProduccion/:id", BuscarProduccion);

export default rutaDeProduccion;