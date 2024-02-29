
/////
// VariedadCultivo.route.js
import { Router } from "express";
import { RegistrarVariedadCultivo, listarVariedadCultivo, ActualizarVariedadCultivo, DesactivarVariedadCultivo, BuscarVariedadCultivo } from "../controllers/VariedadCultivo.controller.js";
import { validarVariedadC } from "../validate/variedad_cultivo.js";
import { validarVariedadA } from "../validate/variedad_cultivo.js";
const rutaDeVariedadCultivo = Router()

//localhost:4000/VariedadCultivo
rutaDeVariedadCultivo.get("/listarcultivo", listarVariedadCultivo)
rutaDeVariedadCultivo.post("/registrarcultivo",validarVariedadC, RegistrarVariedadCultivo)
rutaDeVariedadCultivo.put("/actualizarCultivo/:id",validarVariedadA, ActualizarVariedadCultivo)
rutaDeVariedadCultivo.put("/desactivar/Actividad/:id", DesactivarVariedadCultivo);
rutaDeVariedadCultivo.get("/buscarActividad/:id", BuscarVariedadCultivo);

export { rutaDeVariedadCultivo }; // Exporta la constante utilizando la sintaxis de exportación nombrada
