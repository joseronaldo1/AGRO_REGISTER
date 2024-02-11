// Produccion.route.js
import { Router } from "express";
import { RegistrarProduccion, listarProduccion, ActualizarProduccion, DesactivarProduccion, BuscarProduccion } from "../controller/Produccion.controller.js";

const rutaDeProduccion = Router()

//localhost:3000/listarProduccion
rutaDeProduccion.get("/listarProduccion", listarProduccion)
rutaDeProduccion.post("/RegistrarProduccion", RegistrarProduccion)
rutaDeProduccion.put("/actualizarProduccion", ActualizarProduccion)
rutaDeProduccion.delete("/desactivarProduccion", DesactivarProduccion);
rutaDeProduccion.get("/buscarProduccion", BuscarProduccion);

export { rutaDeProduccion }; // Exporta la constante utilizando la sintaxis de exportación nombrada
