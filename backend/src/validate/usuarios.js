import { check } from "express-validator";

//REGISTRAR
export const validarUsuarioC = [
    check('nombre', 'El nombre de la variedad es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('apellidos', 'El apellido es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('correo', 'El correo es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('rol', 'El rol es obligatorio y debe ser solo "administrador" y "trabajador".').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('ficha_tecnica', 'El campo de ficha tecnica debe contener solo números').isNumeric(),
    check('contraseña', 'El campo de contraseña debe contener solo números').isNumeric(),
];

//ACTUALIZAR
export const validarUsuarioA = [
    check('nombre', 'El nombre de la variedad es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('apellidos', 'El apellido es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('correo', 'El correo es obligatorio y debe tener máximo 20 caracteres, y solo puede contener letras y espacios').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('rol', 'El rol es obligatorio y debe ser solo "administrador" y "trabajador".').not().isEmpty().isLength({ max: 20 }).matches(/^[a-zA-Z\s]+$/),
    check('ficha_tecnica', 'El campo de ficha tecnica debe contener solo números').isNumeric(),
    check('contraseña', 'El campo de contraseña debe contener solo números').isNumeric(),
];