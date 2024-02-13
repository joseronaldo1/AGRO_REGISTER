import { pool } from "../database/conexion.js";

//crud listar
export const listarVariedadCultivo = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM variedad_cultivo")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay cultivos"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": "error en el sistema"
        })
    }
}
//crud Registrar
export const RegistrarVariedadCultivo = async (req, res) => {
    try {
        const { nombre_variedad } = req.body;

        if (!nombre_variedad) {
            return res.status(400).json({
                status: 400,
                message: 'El campo nombre_variedad es requerido'
            });
        }

        const [result] = await pool.query("INSERT INTO variedad_cultivo (nombre_variedad) VALUES (?)", [nombre_variedad]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró la Variedad con éxito',
                result: result // Mostrar el objeto result completo
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se registró la Variedad',
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
export const ActualizarVariedadCultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_variedad} = req.body;


        const [oldVCultivo] = await pool.query("SELECT * FROM variedad_cultivo WHERE id_variedad_cultivo=?", [id]);

        

        const [result] = await pool.query(
            `UPDATE variedad_cultivo SET nombre_variedad = ${nombre_variedad ? `'${nombre_variedad}'` : `'${oldVCultivo[0].nombre_variedad}'`} WHERE id_variedad_cultivo = ?`,[id]
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
export const DesactivarVariedadCultivo = async (req, res) => {
    try {
        const { id_variedad_cultivo } = req.body; // 
        const [result] = await pool.query("DELETE FROM variedad_cultivo WHERE id_variedad_cultivo = ?", [id_variedad_cultivo]); // Cambiado 'id' por 'id_tipo_actividad'

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
            message: "error en el sistema."
        });
    }
}

// CRUD - Buscar
export const BuscarVariedadCultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM variedad_cultivo WHERE id_variedad_cultivo=?", [id]);
                    
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



