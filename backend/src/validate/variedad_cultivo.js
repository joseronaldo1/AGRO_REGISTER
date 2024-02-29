import { check } from "express-validator";

//REGISTRAR
export const validarVariedadC = [
    check('nombre_variedad', 'El nombre de la variedad es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('fk_tipo_cultivo', 'El campo de clave foránea debe contener solo números').isNumeric()
];

//ACTUALIZAR
export const validarVariedadA = [
    check('nombre_variedad', 'El nombre de la variedad debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().optional().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/)
];