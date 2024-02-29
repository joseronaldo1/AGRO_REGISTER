import { pool } from "../database/conexion.js";
import { validationResult } from 'express-validator';

//crud Listar
export const ListarProduccion = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM produccion")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay Producciones"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": "error en el sistema"
        })
    }
}
//crud Registrar
export const RegistrarProduccion = async (req, res) => {
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const { cantidad_produccion, precio, fk_id_variedad_cultivo } = req.body;
        

        const [result] = await pool.query("INSERT INTO produccion (cantidad_produccion, precio, fk_id_variedad_cultivo) VALUES (?, ?, ?)", [cantidad_produccion, precio, fk_id_variedad_cultivo]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró la Producción con éxito',
                result: result 
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se registró la Producción',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'error en el sistema'
        });
    }
};

//crud Registrar 2
export const Registrar = async (req, res) => {
    try {
        const { cantidad_produccion, precio } = req.body;

        if (!cantidad_produccion, precio) {
            return res.status(400).json({
                status: 400,
                message: 'El campo cantidad_produccion, precio o fk_ es requerido'
            });
        }
    
        const [result] = await pool.query("INSERT INTO variedad_cultivo (cantidad_produccion, precio) VALUES (?, ?)", [cantidad_produccion, precio]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró la Producción con éxito',
                result: result 
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se registró la Producción',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'error en el sistema'
        });
    }
}


//actualizar
export const ActualizarProduccion = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { cantidad_produccion, precio, fk_id_variedad_cultivo } = req.body;

        // Realiza una consulta para obtener la variedad de cultivo antes de actualizarla
        const [oldproduccion] = await pool.query("SELECT * FROM produccion WHERE id_produccion=?", [id]);

        if (oldproduccion.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Produccion no encontrada',
            });
        }

        // Realiza la actualización en la base de datos
        const [result] = await pool.query(
            `UPDATE produccion 
            SET cantidad_produccion = ${cantidad_produccion ? `'${cantidad_produccion}'` : `'${oldproduccion[0].cantidad_produccion}'`},
            precio = ${precio ? `'${precio}'` : `'${oldproduccion[0].precio}'`},
            fk_id_variedad_cultivo = ${fk_id_variedad_cultivo ? `'${fk_id_variedad_cultivo}'` : `'${oldproduccion[0].fk_id_variedad_cultivo}'`} 
            WHERE id_produccion = ?`,
            [id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Producción actualizada con éxito',
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se pudo actualizar la Producción',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error en el sistema'
        });
    }
};

//CRUD - Desactivar
export const DesactivarProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [oldproduccion] = await pool.query("SELECT * FROM produccion WHERE id_produccion = ?", [id]); 
        
        const [result] = await pool.query(
            `UPDATE produccion SET estado = ${estado ? `'${estado}'` : `'${oldproduccion[0].estado}'`} WHERE id_produccion = ?`,[id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se desactivó la producción con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró la producción para desactivar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        });
    }
}

// CRUD - Buscar
export const BuscarProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM produccion WHERE id_produccion=?", [id]);
                    
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontraron resultados para la búsqueda'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "error en el sistema"
        });
    }
}