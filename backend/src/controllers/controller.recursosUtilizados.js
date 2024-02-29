import { pool } from "../database/conexion.js";
import {validationResult} from "express-validator"

// CRUD - Registrar
export const RegistrarRecursosUtilizados = async (req, res) => {
    try {

        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { cantidad, fk_id_actividad, fk_id_tipo_recurso } = req.body;
        const [result] = await pool.query("INSERT INTO recursos_utilizados (cantidad, fk_id_actividad, fk_id_tipo_recurso) VALUES (?,?,?)", [cantidad, fk_id_actividad, fk_id_tipo_recurso]);

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
                message: error.message || 'Error en el sistema'
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
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { id } = req.params;
        const { cantidad, fk_id_actividad, fk_id_tipo_recurso } = req.body;
        // Primero, obtén el registro existente para saber cuál es el valor actual de cantidad
        const [oldTipoRecurso] = await pool.query("SELECT * FROM recursos_utilizados WHERE id_recursos_utilizados=?", [id]);
        // Luego, actualiza el registro con los nuevos valores, utilizando parámetros para evitar inyecciones SQL
        const [result] = await pool.query(`UPDATE recursos_utilizados SET cantidad = ?, fk_id_actividad = ?, fk_id_tipo_recurso = ? WHERE id_recursos_utilizados = ?`, [cantidad || oldTipoRecurso[0].cantidad, fk_id_actividad || oldTipoRecurso[0].fk_id_actividad, fk_id_tipo_recurso || oldTipoRecurso[0].fk_id_tipo_recurso, id]);
        
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
        const { id } = req.params;
        const { estado } = req.body;
        const [oldTipoRecurso] = await pool.query("SELECT * FROM recursos_utilizados WHERE id_recursos_utilizados=?", [id]);

        const [result] = await pool.query( `UPDATE recursos_utilizados SET estado = ${estado ? `'${estado}'` : `'${oldTipoRecurso[0].estado}'`} WHERE id_recursos_utilizados=?`,
            [id]
        );
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se desactivo con éxito el recurso utilizado',
                result: result
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se desactivo el recurso utilizado'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};
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




