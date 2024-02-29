import { check } from "express-validator";

//REGISTRAR
export const tipoCultivoC = [
    check('nombre', 'El nombre del tipo del cultivo es obligatorio y debe tener máximo 30 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 30 }).matches(/^[a-zA-Z\s]+$/),

];

//ACTUALIZAR
export const tipoCultivoA = [
    check('nombre', 'El nombre del tipo del cultivo es obligatorio y debe tener máximo 30 caracteres, y solo puede contener letras y espacios').not().optional().isEmpty().isLength({ max: 30 }).matches(/^[a-zA-Z\s]+$/),
];