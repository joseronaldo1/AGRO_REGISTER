import {check} from 'express-validator';


export const validarActividadC =[
    check('tiempo', 'El campo de tiempo debe contener solo números').isNumeric().isEmpty(),

    check('fk_id_asignacion', 'El campo de clave foránea debe contener solo números').isNumeric().isEmpty(),
    
    check('fk_id_programacion', 'El campo de clave foránea debe contener solo números').isNumeric().isEmpty(),

    check('estado', 'El estado es obligatorio y debe tener máximo 30 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 30 }).matches(/^[a-zA-Z\s]+$/),

];


