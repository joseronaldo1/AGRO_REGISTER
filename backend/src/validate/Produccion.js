import { check } from "express-validator";

//REGISTRAR
export const validarProduccionR = [
    check('cantidad_produccion', 'La cantidad de la producción es obligatorio y debe contener solo números').isNumeric(),
    check('precio', 'El precio de la producción es obligatorio y debe contener solo números').isNumeric(),
    check('fk_id_variedad_cultivo', 'El campo de clave foránea debe contener solo números').isNumeric()
];

//ACTUALIZAR
export const validarProduccionA = [
    check('cantidad_produccion', 'La cantidad de la producción es obligatorio y debe contener solo números').isNumeric(),
    check('precio', 'El precio de la producción es obligatorio y debe contener solo números').isNumeric()
];