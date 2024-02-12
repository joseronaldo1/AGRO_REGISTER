import { Router } from "express";
import { RegistrarRecursosUtilizados, actualizarRecursosUtilizados, buscarRecursosUtilizados, desactivarRecursosUtilizados,listarRecursosUtilizados } from "../controllers/RecursosUtilizados.controller.js";


const rutaDeRecursosUtilizados = Router();

rutaDeRecursosUtilizados.post("/registrarRecursos", RegistrarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/listarRecursos", listarRecursosUtilizados);
rutaDeRecursosUtilizados.put("/actualizarRecursos", actualizarRecursosUtilizados);
rutaDeRecursosUtilizados.delete("/desactivarRecursos", desactivarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/buscarRecursos", buscarRecursosUtilizados);

export default rutaDeRecursosUtilizados;
