import { Router } from "express";
import {  Registrartipo_cultivo, Actualizartipo_cultivo, Desactivartipo_cultivo, Buscartipo_cultivo, listartipo_cultivo  } from "../controllers/tipo_cultivo.controller";

const router = Router();


router.post("/Registrartipo_cultivo", Registrartipo_cultivo);
router.put("/Actualizartipo_cultivo", Actualizartipo_cultivo);
router.delete("/Desactivartipo_cultivo", Desactivartipo_cultivo);
router.get("/Buscartipo_cultivo", Buscartipo_cultivo);
router.get("/listartipo_cultivo", listartipo_cultivo);

export default router;