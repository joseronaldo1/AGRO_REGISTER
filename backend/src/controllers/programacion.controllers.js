import { pool } from "../database/conexion.js"

export const listarProgramacion = async (req, res) =>{
    try{
        const [resultado] = await pool.query("select * from programacion")

        if (resultado.length > 0){
            res.status(200).json(resultado)
        }else {
            res.status(404).json({
                "mensaje": "no se pudo mostar hay algun error"
            })
        }  

    }catch(error){
        res.status(500).json({
            "mensaje": error
        })
    }
}

export const RegistrarProgramacion = async (req, res) => {
    try {
        const {fecha_inicio, fecha_fin, observacion, fk_id_lote, fk_tipo_actividad, estado} = req.body
        const [resultado] = await pool.query("insert into actividades(fecha_inicio, fecha_fin, observacion, fk_id_lote, fk_tipo_actividad, estado) values (?,?,?,?,?,?)", [fecha_inicio, fecha_fin, observacion, fk_id_lote, fk_tipo_actividad, estado])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "programacion registrada con exito"
            })
        } else {
            res.status(400).json({
                "mensaje": "hay un error no se pudo guardar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const ActualizarProgramacion = async (req,res) => {
    try {
        const {id_programacion} = req.params
        const {fecha_inicio, fecha_fin, observacion, fk_id_lote, fk_tipo_actividad, estado} = req.body
        const [ oldUser ] = await pool.query("select * from actividades where id_programacion=?", [id_programacion])
        const [ resultado ] =await pool.query(`update actividades set fecha_inicio="${fecha_inicio?fecha_inicio:oldUser[0].fecha_inicio}", fecha_fin="${fecha_fin?fecha_fin:oldUser[0].fecha_fin}", observacion="${observacion?observacion:[0].observacion}", fa_id_lote="${fk_id_lote?fk_id_lote:oldUser[0].fk_id_lote}", fk_tipo_actividad="${fk_tipo_actividad?fk_tipo_actividad:oldUser[0].fk_tipo_actividad}", estado="${estado?estado:oldUser[0].estado}" where id_programacion=${parseInt(id_programacion)}`)

        if (resultado.aproductosRows > 0) {
            res.status(200).json({
                "mensaje": "ha sido actualizado"
            })
        } else {
            productostus(404).json({
                "mensaje": "No se pudo actualizar"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const BuscarProgramacion = async (req, res) => {
    try {
        const { id_programacion } = req.params;
        const [ resultado ] = await pool.query("select * from actividades where id_programacion=?", [id_programacion])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "mensaje": "No se encontró nada con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "mensaje": error
        })     
    }
}

export const DesactivarProgramacion = async (req, res) => {
    try{
        const { id_programacion } = req.params;
        const [ resultado ] = await pool.query("delete from actividades where id_programacion=?", [id_programacion])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "desactivado con exito"
            })
        } else {
            res.status(404).json({
                "mensaje": "No se pudo desactivar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}