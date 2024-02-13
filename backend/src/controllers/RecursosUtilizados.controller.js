import { pool } from "../database/conexion.js";

// CRUD - Registrar
export const RegistrarRecursosUtilizados = async (req, res) => {
    try {
        const { cantidad } = req.body;

        // Validar que cantidad esté presente en el cuerpo de la solicitud
        if (!cantidad) {
            return res.status(400).json({
                status: 400,
                message: 'El campo cantidad es requerido'
            });
        }

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
            message: error.message || 'Ha ocurrido un error al procesar la solicitud'
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
            message: "error en el sistema"
        });
    }
}



// CRUD - Actualizar
export const actualizarRecursosUtilizados = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad } = req.body;

        console.log("Consulta SQL:", `SELECT * FROM recursos_utilizados WHERE id_recursos_utilizados=${id}`);

        const [oldTipoRecurso] = await pool.query("SELECT * FROM recursos_utilizados WHERE id_recursos_utilizados=?", [id]);

        

        const [result] = await pool.query(
            `UPDATE recursos_utilizados SET cantidad = ${cantidad ? `'${cantidad}'` : `'${oldTipoRecurso[0].cantidad}'`} WHERE id_recursos_utilizados = ?`,[id]);

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
        console.error("Error en la función Actualizar:", error);  
        res.status(500).json({
            status: 500,
            message: error.message || "error en el sistema"
        });
    }
};























// CRUD - Desactivar
export const desactivarRecursosUtilizados = async (req, res) => {
    try {
        const { id_recursos_utilizados } = req.body; 
        const [result] = await pool.query("DELETE FROM recursos_utilizados WHERE id_recursos_utilizados = ?", [id_recursos_utilizados]); 

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
            message: "error en el sistema"
        });
    }
}



// CRUD -buscar
export const buscarRecursosUtilizados = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM recursos_utilizados WHERE id_recursos_utilizados=?", [id]);
                    
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

    