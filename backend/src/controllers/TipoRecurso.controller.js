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
        const { nombre,valor,estado } = req.body
        const [result] = await pool.query("INSERT INTO tipo_recurso (nombre,valor,estado) VALUES (?, ?, ? )", [nombre,valor,estado])
        

        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'se registro Recurso con exito',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'no se registro el Recurso',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:"error en el sistema"
        })
    }
} 

//actualizar
export const ActualizarTipoRecurso = async (req, res) => {
    try {
        const { id_tipo_recurso, nombre,valor,estado } = req.body;
        const [result] = await pool.query("UPDATE tipo_recurso SET nombre = ?, valor = ?, estado = ? WHERE id_tipo_recurso = ?", [ nombre,valor,estado, id_tipo_recurso]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se edito con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró el registro para editar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "error en el sistema"
        });
    }
}      
//CRUD - Desactivar
export const DesactivarTipoRecurso = async (req, res) => {
    try {
        const { id_tipo_recurso } = req.body; // 
        const [result] = await pool.query("DELETE FROM tipo_recurso WHERE id_tipo_recurso = ?", [id_tipo_recurso]); // Cambiado 'id' por 'id_tipo_actividad'

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

// CRUD - Buscar
export const BuscarTipoRecurso = async (req, res) => {
    try {
        const { nombre } = req.body;
        const [result] = await pool.query("SELECT * FROM tipo_recurso WHERE nombre LIKE ?", [`%${nombre}%`]);

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



