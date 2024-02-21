import { Router } from "express";
import { RegistrarRecursosUtilizados, actualizarRecursosUtilizados, buscarRecursosUtilizados, desactivarRecursosUtilizados,listarRecursosUtilizados } from "../controllers/RecursosUtilizados.controller.js";


const rutaDeRecursosUtilizados = Router();

rutaDeRecursosUtilizados.post("/registrarRecursos", RegistrarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/listarRecursos", listarRecursosUtilizados);
rutaDeRecursosUtilizados.put("/actualizarRecursos/:id", actualizarRecursosUtilizados);
rutaDeRecursosUtilizados.put("/desactivar/Recursos/:id", desactivarRecursosUtilizados);
rutaDeRecursosUtilizados.get("/buscarRecursos/:id", buscarRecursosUtilizados);

export default rutaDeRecursosUtilizados;
