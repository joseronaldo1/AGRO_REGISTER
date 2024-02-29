import { pool } from "../database/conexion.js";

//crud listar
export const listarTipoRecurso = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tipo_recurso")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay recursos"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": "error en el sistema"
        })
    }
}
//crud Registrar
export const RegistroTipoRecurso = async (req, res) => {
    try {
        const { nombre, valor } = req.body;

        // Validar que nombre y valor estén presentes en el cuerpo de la solicitud
        if (!nombre || !valor) {
            return res.status(400).json({
                status: 400,
                message: 'Los campos nombre y valor son requeridos'
            });
        }

        const [result] = await pool.query("INSERT INTO tipo_recurso (nombre, valor) VALUES (?, ?)", [nombre, valor]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró el recurso con éxito',
                result: result
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se registró el recurso',
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
export const ActualizarTipoRecurso = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, valor } = req.body;

        console.log("Consulta SQL:", `SELECT * FROM tipo_recurso WHERE id_tipo_recurso=${id}`);

        const [oldRecurso] = await pool.query("SELECT * FROM tipo_recurso WHERE id_tipo_recurso=?", [id]);

        

        const [result] = await pool.query(
            `UPDATE tipo_recurso SET nombre = ${nombre ? `'${nombre}'` : `'${oldRecurso[0].nombre}'`}, valor = ${valor ? `'${valor}'` : `'${oldRecurso[0].valor}'`} WHERE id_tipo_recurso = ?`,[id]
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
            message: error.message || "error en el sistema"
        });
    }
};
//CRUD - Desactivar
export const DesactivarTipoRecurso = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [oldRecurso] = await pool.query("SELECT * FROM tipo_recurso WHERE id_tipo_recurso = ?", [id]); 
        
        const [result] = await pool.query(
            `UPDATE tipo_recurso SET estado = ${estado ? `'${estado}'` : `'${oldRecurso[0].estado}'`} WHERE id_tipo_recurso = ?`,[id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se desactivo con éxito',
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
            message: error
        });
    }
}

// CRUD - Buscar
export const BuscarTipoRecurso = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM tipo_recurso WHERE id_tipo_recurso=?", [id]);
                    
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


