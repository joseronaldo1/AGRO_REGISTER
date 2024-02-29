import { pool } from '../database/conexion.js';
import { validationResult } from 'express-validator';

export const RegistrarActividad = async (req, res) => {
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { tiempo, observaciones,fk_id_asignacion,fk_id_programacion,estado} = req.body
        const [result] = await pool.query("INSERT INTO actividad (tiempo,observaciones,fk_id_asignacion,fk_id_programacion,estado) VALUES (?, ?,?,?,?)", [tiempo,observaciones,fk_id_asignacion,fk_id_programacion,estado])
        

        if (result.affectedRows > 0 ) {
            res.status(200).json({
                status:(200),
                message:'Se registro la Actividad con exito',
                result:result
            })
        } else {
            res.status(403).json({
                status:(403),
                message:'No se registro la Actividad',
            })
        }
    } catch (error) {
        res.status(500).json({
            status:500,
            message:error
        })
    }
}

export const ActualizarActividad = async (req, res) => {
    try {

        const { id_actividad } = req.params;
        const { tiempo, observaciones,fk_id_asignacion,fk_id_programacion,estado } = req.body;

        console.log(`ID actividad a actualizar: ${id_actividad}`);  

        const [actividades] = await pool.query("SELECT * FROM actividad WHERE id_actividad=?", [id_actividad]);

        console.log("Resultado de la consulta SELECT:", actividades);  

        const [result] = await pool.query(
            `UPDATE actividad SET tiempo = ${tiempo ? `'${tiempo}'` : `'${actividades[0].tiempo}'`}, observaciones = ${observaciones ? `'${observaciones}'` : `'${actividades[0].observaciones}'`} , fk_id_asignacion= ${fk_id_asignacion ? `'${fk_id_asignacion}'` : `'${actividades[0].fk_id_asignacion}'`},fk_id_programacion = ${fk_id_programacion ? `'${fk_id_programacion}'` : `'${actividades[0].fk_id_programacion}'`},estado = ${estado ? `'${estado}'` : `'${actividades[0].estado}'`}
            WHERE id_actividad = ?`,
            [id_actividad]
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
        console.error("Error en la función Actualizar:", error);
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};

export const DesactivarActividad = async (req, res) => {
    try {
        const { id_actividad } = req.params;
        const [resultado] = await pool.query("UPDATE actividad SET estado='inactivo' WHERE id_actividad=?", [id_actividad]);
    
        if (resultado.affectedRows > 0) {
          res.status(201).json({
            mensaje: "Su actividad se desactivó con éxito"
          });
        } else {
          res.status(404).json({
            mensaje: "La actividad No se pudo desactivar"
          });
        }
      } catch (error) {
        res.status(500).json({'status':500,'message':'error en el sistema: '+error});
      }
};

export const BuscarActividad = async (req, res) => {
    try {
        const { id_actividad } = req.params;
        const [result] = await pool.query("SELECT * FROM actividad WHERE id_actividad=?", [id_actividad]);
                    
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


export const listarActividad = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM actividad")

        if (result.length > 0 ) {
            res.status(200).json(result)
        } else {
            res.status(400).json({
                "Mensaje":"No hay Actividades"
            })
        }
    } catch (error) {
        res.status(500).json({
            "Mensaje": error
        })
    }
}