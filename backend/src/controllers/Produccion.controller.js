import { pool } from "../database/conexion.js";

//crud listar
export const listar = async (req, res) => {
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
export const Registrar = async (req, res) => {
    try {
        const { cantidad_produccion,precio } = req.body

        // Validar que nombre_variedad esté presente en el cuerpo de la solicitud
        if (!cantidad_produccion, !precio) {
            return res.status(400).json({
                status: 400,
                message: 'completa todos los campos requeridos'
            });
        }

        const [result] = await pool.query("INSERT INTO produccion (cantidad_produccion,precio) VALUES (?, ?)", [cantidad_produccion,precio]);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'se registro la produccion con exito',
                result: result
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'no se registro la produccion',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Ha ocurrido un error'
        });
    }
}

//actualizar
export const Actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { cantidad_produccion, precio } = req.body;

        console.log(`ID produccion a actualizar: ${id}`);  // Agrega este log

        const [oldproduccion] = await pool.query("SELECT * FROM produccion WHERE id_produccion=?", [id]);

        console.log("Resultado de la consulta SELECT:", oldproduccion);  // Agrega este log

        const [result] = await pool.query(
            `UPDATE produccion SET cantidad_produccion = ${cantidad_produccion ? `'${cantidad_produccion}'` : `'${oldproduccion[0].cantidad_produccion}'`}, precio = ${precio ? `'${precio}'` : `'${oldproduccion[0].precio}'`} WHERE id_produccion = ?`,
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
export const Eliminar = async (req, res) => {
    try {

        const { id_produccion } = req.body; //
        const [result] = await pool.query("DELETE FROM produccion WHERE id_produccion = ?", [id_produccion]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se elimino con éxito',
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
