import { check } from "express-validator";

//REGISTRAR
export const recursosUtilizadosC = [
    check('fk_id_tipo_recurso', 'El campo de clave foránea debe contener solo números').isNumeric(),
    check('fk_id_actividad', 'El campo de clave foránea debe contener solo números').isNumeric(),
    check('cantidad', 'El campo de cantidad debe contener solo números').isNumeric()
];

//ACTUALIZAR
export const recursosUtilizadosA = [
    check('cantidad', 'El campo de cantidad debe contener solo números').isNumeric().optional()
];
