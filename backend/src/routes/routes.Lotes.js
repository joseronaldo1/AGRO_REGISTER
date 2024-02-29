import { Router } from "express";
import {registrar,  actualizar, desactivar, buscar, listar } from '../controller/controller.Lotes.js';

const rutaLotes = Router();

rutaLotes.get('/listar', listar);
rutaLotes.post('/registrar', registrar);
rutaLotes.get('/buscar/:id_lote', buscar); 
rutaLotes.put('/actualizar/:id_lote', actualizar);
rutaLotes.post('/desactivar/:id_lote', desactivar);


export default rutaLotes;