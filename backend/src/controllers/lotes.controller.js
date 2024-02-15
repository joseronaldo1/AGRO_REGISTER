import { pool } from "../database/conexion.js";



//listar
export const listarTodo =async (req, res)=> {
    try {
        const [result] = await pool.query("SELECT * FROM lotes")

        if (result.length > 0 ) {
            res.status(200).json(result)
        }else{
            res.status(404).json({
                "mensaje": "no hay lotes"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}


//crud Registrar
export const registrar = async (req, res) => {
    try {
        const { nombre, estado } =req.body

        // Validar que nombre_variedad esté presente en el cuerpo de la solicitud
        if (!nombre, !estado) {
            return res.status(400).json({
                status: 400,
                message: 'completa todos los campos requeridos'
            });
        }

        const [result] = await pool.query("INSERT INTO lotes (nombre, estado) VALUES (?, ?)", [nombre, estado]);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'lote registrado con exito',
                result: result
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'no se pudo registrar el lote',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Ha ocurrido un error '
        });
    }
}

//CRUD - eliminar
export const eliminar = async (req, res) => {
    try {
        const { id_lote } = req.body; // 
        const [result] = await pool.query("DELETE FROM lotes WHERE id_lote = ?", [id_lote]); 

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se elimino con éxito',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró el registro para eliminar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        });
    }
}
//actualizar
export const Actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, estado } = req.body;

        console.log(`ID Lote a actualizar: ${id}`);  // Agrega este log

        const [oldLotes] = await pool.query("SELECT * FROM lotes WHERE id_lote=?", [id]);

        console.log("Resultado de la consulta SELECT:", oldLotes);  // Agrega este log

        const [result] = await pool.query(
            `UPDATE lotes SET nombre = ${nombre ? `'${nombre}'` : `'${oldLotes[0].nombre}'`}, estado = ${estado ? `'${estado}'` : `'${oldLotes[0].estado}'`} WHERE id_lote = ?`,
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


// CRUD - Buscarsolouno
export const Buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM lotes WHERE id_lote=?", [id]);
                    
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
