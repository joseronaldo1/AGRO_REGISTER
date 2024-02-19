
/////
// VariedadCultivo.route.js
import { Router } from "express";
import { RegistrarVariedadCultivo, listarVariedadCultivo, ActualizarVariedadCultivo, DesactivarVariedadCultivo, BuscarVariedadCultivo } from "../controllers/VariedadCultivo.controller.js";

const rutaDeVariedadCultivo = Router()

//localhost:4000/VariedadCultivo
rutaDeVariedadCultivo.get("/listarcultivo", listarVariedadCultivo)
rutaDeVariedadCultivo.post("/registrarcultivo", RegistrarVariedadCultivo)
rutaDeVariedadCultivo.put("/actualizarCultivo/:id", ActualizarVariedadCultivo)
rutaDeVariedadCultivo.put("/desactivar/Actividad/:id", DesactivarVariedadCultivo);
rutaDeVariedadCultivo.get("/buscarActividad/:id", BuscarVariedadCultivo);

export { rutaDeVariedadCultivo }; // Exporta la constante utilizando la sintaxis de exportación nombrada
