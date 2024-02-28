// Corrected import statement
import { check } from "express-validator";


//REGISTRAR
export const validaAsignacion = [
    // check('fecha_asignacion', 'La fecha debe tener el formato YYYY-MM-DD.').isEmpty().matches(/^\d{4}-\d{2}-\d{2}$/),
    check('fk_id_usuario', 'El campo de clave foránea debe contener solo números.').isNumeric(),
    check('fk_id_lote', 'El campo de clave foránea para el lote debe contener solo números.').isNumeric(),
    check('estado', 'El campo estado debe ser una cadena no vacía.').isString().notEmpty()
  ];



//ACTUALIZAR


export const ActualiazaAsignacion = [
    check('fecha_asignacion')
        .optional()
        .not().isEmpty().withMessage('La fecha de asignación no puede estar vacía')
        .matches(/^\d{4}-\d{2}-\d{2}$/).withMessage('La fecha debe tener el formato YYYY-MM-DD.')
];
