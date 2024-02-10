import { pool } from "../database/conexion.js";

// CRUD - Registrar
export const RegistrarRecursosUtilizados = async (req, res) => {
    try {
        const { cantidad } = req.body;
        const [result] = await pool.query("INSERT INTO recursos_utilizados (cantidad) VALUES (?)", [cantidad]);

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
export const listarRecursosUtilizados = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM recursos_utilizados");

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
export const actualizarRecursosUtilizados = async (req, res) => {
    try {
        const { id_recursos_utilizados, cantidad } = req.body;
        const [result] = await pool.query("UPDATE recursos_utilizados SET cantidad = ? WHERE id_recursos_utilizados = ?", [cantidad, id_recursos_utilizados]);

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
export const desactivarRecursosUtilizados = async (req, res) => {
    try {
        const { cantidad } = req.body; 
        const [result] = await pool.query("DELETE FROM recursos_utilizados WHERE cantidad = ?", [cantidad]); 

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
export const buscarRecursosUtilizados = async (req, res) => {
    try {
        const { cantidad } = req.body;
        const [result] = await pool.query("SELECT * FROM recursos_utilizados WHERE cantidad LIKE ?", [`%${cantidad}%`]);

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
