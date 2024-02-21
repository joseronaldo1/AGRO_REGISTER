
/*  Registrar tipo_cultivo */
import { pool } from '../database/conexion.js';

export const Registrartipo_cultivo = async (req, res) => {
    try {
        const { nombre } = req.body
        const [result] = await pool.query("INSERT INTO tipo_cultivo (nombre) VALUES (?)", [nombre])
        

        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'se registró el tipo de cultivo con exito',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'No se registro el tipo de cultivo',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:error
        })
    }
}

/* Actualizar tipo_cultivo */
export const Actualizartipo_cultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre } = req.body;

        console.log(`ID tipo_cultivo a actualizar: ${id}`);  // Agrega este log

        const [tipo_cultivo] = await pool.query("SELECT * FROM tipo_cultivo WHERE id_cultivo=?", [id]);

        console.log("Resultado de la consulta SELECT:", tipo_cultivo);  // Agrega este log

        const [result] = await pool.query(
            `UPDATE tipo_cultivo SET nombre = ${nombre ? `'${nombre}'` : `'${tipo_cultivo[0].nombre}'`} WHERE id_cultivo = ?`,
            [id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó el tipo de cultivo con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se actualizo el tipo de cultivo'
            });
        }
    } catch (error) {
        console.error("Error en la función Actualizar:", error);  // Agrega este log
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};

/* Desactivar tipo_cultivo */
export const Desactivartipo_cultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [tipo_cultivo] = await pool.query("SELECT * FROM tipo_cultivo WHERE id_cultivo=?", [id]);

        const [result] = await pool.query(
            `UPDATE tipo_cultivo SET estado = ${estado ? `'${estado}'` : `'${tipo_cultivo[0].estado}'`} WHERE id_cultivo=?`,
            [id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró el registro para actualizar'
            });
        }
    } catch (error) {
        console.error("Error en la función Actualizar:", error); // Agrega este log
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};

/* Buscar tipo_cultivo */

export const Buscartipo_cultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM tipo_cultivo WHERE id_cultivo=?", [id]);
                    
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
            message: error
        });
    }
}


/* Listar tipo_cultivo */
export const listartipo_cultivo = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tipo_cultivo")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay Tipos de cultivos"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": error
        })
    }
}