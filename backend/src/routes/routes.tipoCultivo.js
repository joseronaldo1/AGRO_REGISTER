import { Router } from "express";
import {  Registrartipo_cultivo, Actualizartipo_cultivo, Desactivartipo_cultivo, Buscartipo_cultivo, listartipo_cultivo  } from "../controller/controller.tipoCultivo.js";

import { tipoCultivoA } from "../validate/tipoCultivo.js";
import { tipoCultivoC } from "../validate/tipoCultivo.js";
/* Rutas tipo de cultivo */
const RutaTipoCultivo = Router();


RutaTipoCultivo.post("/Registrartipo_cultivo", tipoCultivoC, Registrartipo_cultivo);
RutaTipoCultivo.put("/Actualizartipo_cultivo/:id", tipoCultivoA, Actualizartipo_cultivo);
RutaTipoCultivo.put("/Desactivartipo_cultivo/tipo_cultivo/:id", Desactivartipo_cultivo);
RutaTipoCultivo.get("/Buscartipo_cultivo/:id", Buscartipo_cultivo);
RutaTipoCultivo.get("/listartipo_cultivo", listartipo_cultivo);

export default RutaTipoCultivo;