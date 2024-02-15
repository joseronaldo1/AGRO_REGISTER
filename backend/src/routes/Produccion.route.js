// Produccion.route.js
import { Router } from "express";
import { Registrar, listar, Actualizar, Eliminar, Buscar } from "../controller/Produccion.controller.js";


const rutaDeProduccion = Router()

//localhost:3000/listarProduccion
rutaDeProduccion.get("/Produccion", listar)
rutaDeProduccion.post("/Produccion", Registrar)
rutaDeProduccion.put("/Produccion/:id", Actualizar)
rutaDeProduccion.delete("/Produccion", Eliminar);
rutaDeProduccion.get("/Produccion/:id", Buscar);

export { rutaDeProduccion }; // Exporta la constante utilizando la sintaxis de exportación nombrada
