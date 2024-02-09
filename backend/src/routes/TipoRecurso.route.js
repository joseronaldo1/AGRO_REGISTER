import { Router } from "express";
import { listarTipoRecurso, RegistroTipoRecurso, ActualizarTipoRecurso, DesactivarTipoRecurso, BuscarTipoRecurso 
} from "../controllers/TipoRecurso.controller.js";

const rutaDeTipoRecurso = Router()

//localhost:4000/VariedadCultivo
rutaDeTipoRecurso.get("/listarRecurso", listarTipoRecurso);
rutaDeTipoRecurso.post("/RegistroRecurso", RegistroTipoRecurso);
rutaDeTipoRecurso.put("/actualizarRecurso", ActualizarTipoRecurso);
rutaDeTipoRecurso.delete("/desactivarRecurso", DesactivarTipoRecurso);
rutaDeTipoRecurso.get("/buscarRecurso", BuscarTipoRecurso);


export { rutaDeTipoRecurso };

/////
