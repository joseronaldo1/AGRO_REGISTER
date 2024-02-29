import {query} from 'express';
import { pool } from '../database/conexion.js';

export const listar = async (req,res) => {
    try{
    let sql = 'select * from fincas';
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json(result);
    }else{
      res.status(404).json({'message': 'No se encontraron fincas '});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  };
  
  export const registrar = async (req, res) =>{
    try{
    const {nombre_propietario, nombre_propiedad,  direccion, dimenciones, divicion_por_lotes, limites_finca} = req.body;
  
    let sql =  `INSERT INTO fincas (nombre_propietario, nombre_propiedad, direccion, dimenciones, divicion_por_lotes, limites_finca) VALUES (?, ?, ?, ?, ?, ?)`;
  
    const [rows] = await pool.query(sql,[nombre_propietario, nombre_propiedad,  direccion, dimenciones, divicion_por_lotes, limites_finca]);
    if (rows.affectedRows > 0) {
      res.status(200).json({'status':200,'message':'Registro exitoso de su finca'});
    }else{
      res.status(403).json({'status':403,'message':'Fallo el registro de su finca'});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  
  };
  


  export const desactivar = async (req, res) => {
    try {
      const { id_finca } = req.params;
      const [resultado] = await pool.query("UPDATE fincas SET estado='inactivo' WHERE id_finca=?", [id_finca]);
  
      if (resultado.affectedRows > 0) {
        res.status(201).json({
          mensaje: "Su Finca se desactivó con éxito"
        });
      } else {
        res.status(404).json({
          mensaje: "La Finca No se pudo desactivar"
        });
      }
    } catch (error) {
      res.status(500).json({'status':500,'message':'error en el sistema: '+error});
    }
  };
  

  export const actualizar = async (req, res) => {
    try {
      const { id_finca } = req.params;
      const { nombre_propietario, nombre_propiedad, direccion, dimenciones, divicion_por_lotes, limites_finca } = req.body;
  
      let sql = `
        UPDATE fincas
        SET nombre_propietario = ?,
            nombre_propiedad = ?,
            direccion = ?,
            dimenciones = ?,
            divicion_por_lotes = ?,
            limites_finca = ?
        WHERE id_finca = ?
      `;
  
      const [rows] = await pool.query(sql, [nombre_propietario, nombre_propiedad, direccion, dimenciones, divicion_por_lotes, limites_finca, id_finca]);
  
      if (rows.affectedRows > 0) {
        res.status(200).json({ status: 200, message: 'La informacion ha sido actualizada' });
      } else {
        res.status(404).json({ status: 404, message: 'No se pudo actualizar la información' });
      }
    } catch (error) {
      res.status(500).json({ status: 500, message: 'Error en el sistema: ' + error });
    }
  };
  
  export const buscar = async (req, res) => {
    try {
        const { id_finca } = req.params;
        const [resultado] = await pool.query("SELECT * FROM fincas WHERE id_finca=?", [id_finca]);

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                mensaje: "No se encontró una finca con ese ID"
            });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el sistema: ' + error });
    }
};
