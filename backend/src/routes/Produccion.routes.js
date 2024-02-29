import { Router } from "express";
import { RegistrarProduccion,Registrar, ListarProduccion, ActualizarProduccion, DesactivarProduccion, BuscarProduccion } from "../controllers/Produccion.controller.js";
import { validarProduccionR } from "../validate/Produccion.js";
import { validarProduccionA } from "../validate/Produccion.js";
const rutaDeProduccion = Router()

rutaDeProduccion.get("/listarProduccion", ListarProduccion)
rutaDeProduccion.post("/registrarProduccion",validarProduccionR, RegistrarProduccion)
rutaDeProduccion.post("/registrado", Registrar)
rutaDeProduccion.put("/actualizarProduccion/:id",validarProduccionA, ActualizarProduccion)
rutaDeProduccion.put("/desactivar/Produccion/:id", DesactivarProduccion);
rutaDeProduccion.get("/buscarProduccion/:id", BuscarProduccion);

export default rutaDeProduccion;
