
/*  Registrar actividad */
import { pool } from '../database/conexion.js';

export const RegistrarActividad = async (req, res) => {
    try {
        const { tiempo, observaciones } = req.body
        const [result] = await pool.query("INSERT INTO actividad (tiempo,observaciones) VALUES (?, ?)", [tiempo,observaciones])
        

        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'se registro Actividad con exito',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'no se registro la Actividad',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:error
        })
    }
}

/* Actualizar actividad */
export const ActualizarActividad = async (req, res) => {
    try {
        const { id_actividad, tiempo,observaciones } = req.body;
        const [result] = await pool.query("UPDATE actividad SET tiempo = ?, observaciones = ? WHERE id_actividad = ?", [ tiempo,observaciones, id_actividad]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizo con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se pudo actualizar la actividad'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        });
    }
}

/* Desactivar actividad */
export const DesactivarActividad = async (req, res) => {
    try {
        const { id_actividad } = req.body; 
        const [result] = await pool.query("DELETE FROM actividad WHERE id_actividad = ?", [id_actividad]); // Cambiado 'id' por 'id_tipo_actividad'

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se desactivó con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró la actividad para desactivar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        });
    }
}

/* Buscar actividad */

export const BuscarActividad = async (req, res) => {
    try {
        const { id_actividad } = req.body;
        const [result] = await pool.query("SELECT * FROM actividad WHERE nombre LIKE ?", [`%${id_actividad}%`]);

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


/* Listar actividad */
export const listarActividad = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM actividad")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay Actividades"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": error
        })
    }
}