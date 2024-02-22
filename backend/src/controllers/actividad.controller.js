
/*  Registrar actividad */
import { pool } from '../database/conexion.js';

export const RegistrarActividad = async (req, res) => {
    try {
        const { tiempo, observaciones } = req.body
        const [result] = await pool.query("INSERT INTO actividad (tiempo,observaciones) VALUES (?, ?)", [tiempo,observaciones])
        

        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'Se registro la Actividad con exito',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'No se registro la Actividad',
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
        const { id } = req.params;
        const { tiempo, observaciones } = req.body;

        console.log(`ID actividad a actualizar: ${id}`);  // Agrega este log

        const [actividades] = await pool.query("SELECT * FROM actividad WHERE id_actividad=?", [id]);

        console.log("Resultado de la consulta SELECT:", actividades);  // Agrega este log

        const [result] = await pool.query(
            `UPDATE actividad SET tiempo = ${tiempo ? `'${tiempo}'` : `'${actividades[0].tiempo}'`}, observaciones = ${observaciones ? `'${observaciones}'` : `'${actividades[0].observaciones}'`} WHERE id_actividad = ?`,
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
        console.error("Error en la función Actualizar:", error);  // Agrega este log
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};



//desactivar
export const DesactivarActividad = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [actividad] = await pool.query("SELECT * FROM actividad WHERE id_actividad=?", [id]);

        const [result] = await pool.query(
            `UPDATE actividad SET estado = ${estado ? `'${estado}'` : `'${actividad[0].estado}'`} WHERE id_actividad=?`,
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

/* Buscar actividad */

export const BuscarActividad = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM actividad WHERE id_actividad=?", [id]);
                    
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