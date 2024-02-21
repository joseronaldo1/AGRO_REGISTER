import { Router } from "express";
import {  Registrartipo_cultivo, Actualizartipo_cultivo, Desactivartipo_cultivo, Buscartipo_cultivo, listartipo_cultivo  } from "../controllers/tipo_cultivo.controller.js";

const rutaTipo_cultivo = Router();


rutaTipo_cultivo.post("/Registrartipo_cultivo", Registrartipo_cultivo);
rutaTipo_cultivo.put("/Actualizartipo_cultivo/:id", Actualizartipo_cultivo);
rutaTipo_cultivo.put("/Desactivartipo_cultivo/tipo_cultivo/:id", Desactivartipo_cultivo);
rutaTipo_cultivo.get("/Buscartipo_cultivo/:id", Buscartipo_cultivo);
rutaTipo_cultivo.get("/listartipo_cultivo", listartipo_cultivo);

export default rutaTipo_cultivo;