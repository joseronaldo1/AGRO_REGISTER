import { pool } from "../database/conexion.js";

// CRUD - Registrar
export const RegistrarTipoActividad = async (req, res) => {
    try {
        const { nombre } = req.body;
        const [result] = await pool.query("INSERT INTO tipo_actividad (nombre) VALUES (?)", [nombre]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró con éxito',
                result: result
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
            message: error.message
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
            message: error.message
        });
    }
}

// CRUD - Actualizar
export const actualizarTipoActividad = async (req, res) => {
        try {
            const { id_tipo_actividad, nombre } = req.body;
            const [result] = await pool.query("UPDATE tipo_actividad SET nombre = ? WHERE id_tipo_actividad = ?", [nombre, id_tipo_actividad]);
    
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
            res.status(500).json({
                status: 500,
                message: error.message
            });
        }
    }

// CRUD - Desactivar
export const desactivarTipoActividad = async (req, res) => {
    try {
        const { id_tipo_actividad } = req.body; 
        const [result] = await pool.query("DELETE FROM tipo_actividad WHERE id_tipo_actividad = ?", [id_tipo_actividad]); // Cambiado 'id' por 'id_tipo_actividad'

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se desactivó con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró el registro para desactivar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}


// CRUD -buscar
export const buscarTipoActividad = async (req, res) => {
    try {
        const { nombre } = req.body;
        const [result] = await pool.query("SELECT * FROM tipo_actividad WHERE nombre LIKE ?", [`%${nombre}%`]);

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
            message: error.message
        });
    }
}
