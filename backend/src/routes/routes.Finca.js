import { Router } from "express";
import {registrar,  actualizar, desactivar, buscar, listar } from '../controller/controller.fincas.js';

const rutaFincas = Router();

rutaFincas.get('/listar', listar);
rutaFincas.post('/registrar', registrar);
rutaFincas.get('/buscar/:id_fincas', buscar); 
rutaFincas.put('/actualizar/:id_fincas', actualizar);
rutaFincas.post('/desactivar/:id_fincas', desactivar);


export default rutaFincas;