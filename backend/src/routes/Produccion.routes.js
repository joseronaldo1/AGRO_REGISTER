// Produccion.route.js
import { Router } from "express";
import { RegistrarProduccion, listarProduccion, ActualizarProduccion, DesactivarProduccion, BuscarProduccion } from "../controllers/Produccion.controller.js";

const rutaProduc = Router()

//localhost:4000/
rutaProduc.get("/listarProduccion", listarProduccion)
rutaProduc.post("/RegistrarProduccion", RegistrarProduccion)
rutaProduc.put("/actualizarProduccion/:id", ActualizarProduccion)
rutaProduc.put("/DesactivarProduccion/Produccion/:id", DesactivarProduccion);
rutaProduc.get("/buscarProduccion/:id", BuscarProduccion);

export default rutaProduc;