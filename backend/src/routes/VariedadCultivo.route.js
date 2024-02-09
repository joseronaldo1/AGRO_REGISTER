
/////
// VariedadCultivo.route.js
import { Router } from "express";
import { RegistrarVariedadCultivo, listarVariedadCultivo, ActualizarVariedadCultivo, DesactivarVariedadCultivo, BuscarVariedadCultivo } from "../controllers/VariedadCultivo.controller.js";

const rutaDeVariedadCultivo = Router()

//localhost:4000/VariedadCultivo
rutaDeVariedadCultivo.get("/listarcultivo", listarVariedadCultivo)
rutaDeVariedadCultivo.post("/registrarcultivo", RegistrarVariedadCultivo)
rutaDeVariedadCultivo.put("/actualizarCultivo", ActualizarVariedadCultivo)
rutaDeVariedadCultivo.delete("/desactivarActividad", DesactivarVariedadCultivo);
rutaDeVariedadCultivo.get("/buscarActividad", BuscarVariedadCultivo);

export { rutaDeVariedadCultivo }; // Exporta la constante utilizando la sintaxis de exportación nombrada
