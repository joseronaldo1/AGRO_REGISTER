import { pool } from "../database/conexion.js";


//crud listar
export const listarProduccion = async (req, res) => {
        try {
            const [result] = await pool.query("SELECT * FROM produccion")
            if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'No se encontraron producciones'
                });
            }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error
            });
        }
    }

//crud Registrar
export const RegistrarProduccion = async (req, res) => {
    try {
        const { cantidad_produccion,precio } = req.body
        const [result] = await pool.query("INSERT INTO produccion (cantidad_produccion,precio) VALUES (?, ?)", [cantidad_produccion,precio])
        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'se registro la informacion con exito ',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'no se registro la informacion',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:error
        })
    }
}

export const ActualizarProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const { precio, cantidad_produccion } = req.body;

        console.log(`ID produccion a actualizar: ${id}`);  // Agrega este log

        const [produccion] = await pool.query("SELECT * FROM produccion WHERE id_produccion=?", [id]);

        console.log("Resultado de la consulta SELECT:", produccion);  // Agrega este log

        const [result] = await pool.query(
            `UPDATE lotes SET precio = ${precio ? `'${precio}'` : `'${produccion[0].precio}'`}, cantidad_produccion = ${cantidad_produccion ? `'${cantidad_produccion}'` : `'${produccion[0].cantidad_produccion}'`} WHERE id_produccion = ?`,
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

//CRUD - Desactivar
export const DesactivarProduccion = async (req, res) => {
    try {
        const { id_produccion } = req.body; //
        const [result] = await pool.query("DELETE FROM produccion WHERE id_produccion = ?", [id_produccion]);

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
            message: error
        });
    }
}

// CRUD - Buscar
export const BuscarProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM produccion WHERE id_produccion=?", [id]);
                    
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