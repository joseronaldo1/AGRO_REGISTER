import { Router } from "express";
import {registrar,  actualizar, desactivar, buscar, listar } from '../controller/controller.TipoRecurso.js';

const rutaTipoRecurso = Router();

rutaTipoRecurso.get('/listar', listar);
rutaTipoRecurso.post('/registrar', registrar);
rutaTipoRecurso.get('/buscar/:id_tipoRecurso', buscar); 
rutaTipoRecurso.put('/actualizar/:id_tipoRecurso', actualizar);
rutaTipoRecurso.post('/desactivar/:id_tipoRecurso', desactivar);


export default rutaTipoRecurso;