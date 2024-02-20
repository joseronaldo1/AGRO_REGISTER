// Produccion.route.js
import { Router } from "express";
import { Registrar, listar, Actualizar, Buscar, Desactivar } from "../controllers/Produccion.controller.js";


const rutaDeProduccion = Router()

//localhost:3000/listarProduccion
rutaDeProduccion.get("/Produccion", listar)
rutaDeProduccion.post("/Produccion", Registrar)
rutaDeProduccion.put("/Produccion/:id", Actualizar)
rutaDeProduccion.put("/Produccion/desactivar/:id",Desactivar);
rutaDeProduccion.get("/Produccion/:id", Buscar);

export default rutaDeProduccion 
