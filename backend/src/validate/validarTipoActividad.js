import { check } from "express-validator";

export const validarTipoActividad = [
    check('nombre', 'El nombre de la actividad es obligatorio y debe tener máximo 20 caracteres, y solo debe contener letras')
    .not().isEmpty().withMessage('El nombre de la actividad es obligatorio')
    .isLength({ max: 20 }).withMessage('El nombre de la actividad debe tener máximo 20 caracteres')
    .matches(/^[a-zA-Z\s]+$/).withMessage('El nombre de la actividad solo debe contener letras'),

    check('fk_id_tipo_cultivo', 'El campo de clave foránea debe contener solo números').isNumeric()
];

//ACTUALIZAR
export const validarTipoActividadActualizar = [
    check('nombre', 'El nombre de la variedad debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().optional().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/)
];


