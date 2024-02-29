import { pool } from "../database/conexion.js";
import { validationResult } from 'express-validator';

// CRUD - Registrar
export const RegistrarTipoActividad = async (req, res) => {
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const { nombre, fk_id_tipo_cultivo } = req.body;
        

        const [result] = await pool.query("INSERT INTO tipo_actividad (nombre, fk_id_tipo_cultivo) VALUES (?, ?)", [nombre, fk_id_tipo_cultivo]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró con éxito',
                result: result // Mostrar el objeto result completo
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se registró',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error en el sistema'
        });
    }
}









// CRUD - Listar
export const listarTipoActividad = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tipo_actividad");

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(400).json({
                message: 'No hay ninguna actividad'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "error en el sistema"
        });
    }
}


 // CRUD - Actualizar
 export const actualizarTipoActividad = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { nombre, fk_id_tipo_cultivo	 } = req.body;

        // Realiza una consulta para obtener la actividad antes de actualizarla
        const [oldTipoActividad] = await pool.query("SELECT * FROM tipo_actividad WHERE id_tipo_actividad=?", [id]);

        if (oldTipoActividad.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Tipo de actividad no encontrada',
            });
        }

        // Realiza la actualización en la base de datos
        const [result] = await pool.query(
            `UPDATE tipo_actividad 
            SET nombre = ${nombre? `'${nombre}'` : `'${oldTipoActividad[0].nombre}'`}, 
            fk_id_tipo_cultivo = ${fk_id_tipo_cultivo ? `'${fk_id_tipo_cultivo}'` : `'${oldTipoActividad[0].fk_id_tipo_cultivo}'`} 
            WHERE id_tipo_actividad = ?`,
            [id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito',
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se encontró el registro para actualizar',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error en el sistema'
        });
    }
};











// CRUD - Desactivar
export const desactivarTipoActividad = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [oldTipoActividad] = await pool.query("SELECT * FROM tipo_actividad WHERE id_tipo_actividad=?", [id]);

        const [result] = await pool.query(
            `UPDATE tipo_actividad SET estado = ${estado ? `'${estado}'` : `'${oldTipoActividad[0].estado}'`} WHERE id_tipo_actividad=?`,
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










// CRUD -buscar
export const buscarTipoActividad = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM tipo_actividad WHERE id_tipo_actividad=?", [id]);
                    
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
