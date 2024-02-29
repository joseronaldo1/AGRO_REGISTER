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
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const { nombre_variedad, fk_tipo_cultivo } = req.body;
        

        const [result] = await pool.query("INSERT INTO variedad_cultivo (nombre_variedad, fk_tipo_cultivo) VALUES (?, ?)", [nombre_variedad, fk_tipo_cultivo]);
        
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


export const ActualizarVariedadCultivo = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id } = req.params;
        const { nombre_variedad, fk_tipo_cultivo } = req.body;

        // Realiza una consulta para obtener la variedad de cultivo antes de actualizarla
        const [oldVCultivo] = await pool.query("SELECT * FROM variedad_cultivo WHERE id_variedad_cultivo=?", [id]);

        if (oldVCultivo.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'Variedad de cultivo no encontrada',
            });
        }

        // Realiza la actualización en la base de datos
        const [result] = await pool.query(
            `UPDATE variedad_cultivo 
            SET nombre_variedad = ${nombre_variedad ? `'${nombre_variedad}'` : `'${oldVCultivo[0].nombre_variedad}'`}, 
            fk_tipo_cultivo = ${fk_tipo_cultivo ? `'${fk_tipo_cultivo}'` : `'${oldVCultivo[0].fk_tipo_cultivo}'`} 
            WHERE id_variedad_cultivo = ?`,
            [id]
        );

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Variedad de cultivo actualizada con éxito',
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'No se pudo actualizar la variedad de cultivo',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error en el sistema'
        });
    }
};
//CRUD - Desactivar
export const DesactivarVariedadCultivo = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [oldVCultivo] = await pool.query("SELECT * FROM variedad_cultivo WHERE id_variedad_cultivo = ?", [id]); 
        
        const [result] = await pool.query(
            `UPDATE variedad_cultivo SET estado = ${estado ? `'${estado}'` : `'${oldVCultivo[0].estado}'`} WHERE id_variedad_cultivo = ?`,[id]
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



