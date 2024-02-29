import { Router } from "express";
import { RegistrarRecursosUtilizados, actualizarRecursosUtilizados, buscarRecursosUtilizados, desactivarRecursosUtilizados,listarRecursosUtilizados } from "../controllers/controller.recursosUtilizados.js";

import { recursosUtilizadosA } from "../validate/RecursosUtilizados.js";
import { recursosUtilizadosC } from "../validate/RecursosUtilizados.js";


const rutaDeRecursosUtilizados = Router();

rutaDeRecursosUtilizados.post("/registrarRecursos", recursosUtilizadosC, RegistrarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/listarRecursos", listarRecursosUtilizados);
rutaDeRecursosUtilizados.put("/actualizarRecursos/:id", recursosUtilizadosA, actualizarRecursosUtilizados);
rutaDeRecursosUtilizados.put("/desactivar/Recursos/:id", desactivarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/buscarRecursos/:id", buscarRecursosUtilizados);

export default rutaDeRecursosUtilizados;