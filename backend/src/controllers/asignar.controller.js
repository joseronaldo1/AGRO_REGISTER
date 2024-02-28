
import { pool } from "../database/conexion.js";
import { validationResult } from 'express-validator';

// CRUD - Listar
export const listarAsignaciones = async (req, res) => {
  try {
    
    const [result] = await pool.query("SELECT * FROM asignaciones");

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        status: 404,
        message: "No hay asignaciones",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// CRUD - Registrar

export const registrarAsignacion = async (req, res) => {
  try {
    // Validación
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fecha_asignacion, fk_id_usuario, fk_id_lote, estado } = req.body;

    // Verificar si los parámetros requeridos están presentes
    if (!fecha_asignacion || !fk_id_usuario || !fk_id_lote || !estado) {
      return res.status(400).json({
        status: 400,
        message: 'Los parámetros son requeridos'
      });
    }

    const [result] = await pool.query(
      "INSERT INTO asignaciones (fecha_asignacion, fk_id_usuario, fk_id_lote, estado) VALUES (?, ?, ?, ?)",
      [fecha_asignacion, fk_id_usuario, fk_id_lote, estado]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se registró la asignación con éxito",
        // result: result,
      });
    } else {
      res.status(403).json({
        status: 403,
        message: "No se registró la asignación",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "Error interno del servidor",
    });
  }
};





// CRUD - Buscar
export const buscarAsignacion = async (req, res) => {
  try {
    const { fecha_asignacion } = req.params;
    const query = "SELECT * FROM asignaciones WHERE fecha_asignacion LIKE ?";
    const [result] = await pool.query(query, [`%${fecha_asignacion}%`]);

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontraron resultados para la fecha proporcionada",
      });
    }
  } catch (error) {
    console.error("Error en buscarAsignacion:", error); // Agrega un mensaje de error a la consola para facilitar la depuración
    res.status(500).json({
      status: 500,
      message: "Error interno del servidor",
    });
  }
};


// CRUD -- ACTUALIZAR
export const Actualizar = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id_asignacion } = req.params;
    const { fecha_asignacion, fk_id_usuario, fk_id_lote } = req.body;

    if (!fecha_asignacion && !fk_id_usuario && !fk_id_lote) {
      return res.status(400).json({
        status: 400,
        message: 'Se requiere al menos un campo para actualizar (fecha_asignacion, fk_id_usuario o fk_id_lote)',
      });
    }

    const [oldAsignacion] = await pool.query("SELECT * FROM asignaciones WHERE id_asignacion=?", [id_asignacion]);

    if (oldAsignacion.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'Asignación no encontrada',
      });
    }

    const updatedValues = {
      fecha_asignacion: fecha_asignacion || oldAsignacion[0].fecha_asignacion,
      fk_id_usuario: fk_id_usuario || oldAsignacion[0].fk_id_usuario,
      fk_id_lote: fk_id_lote || oldAsignacion[0].fk_id_lote,
    };

    const updateQuery = `UPDATE asignaciones 
      SET fecha_asignacion = ?,
      fk_id_usuario = ?,
      fk_id_lote = ?
      WHERE id_asignacion = ?`;

    const [result] = await pool.query(
      updateQuery,
      [updatedValues.fecha_asignacion, updatedValues.fk_id_usuario, updatedValues.fk_id_lote, id_asignacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: result.changedRows > 0 ? "Actualización exitosa" : "Sin cambios realizados",
        updatedValues,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontraron resultados para la actualización",
      });
    }
  } catch (error) {
    console.error("Error en la función Actualizar:", error);
    res.status(500).json({
      status: 500,
      message: error.message || 'Error interno del servidor',
    });
  }
};







// CRUD  Desactivar
export const Desactivar = async (req, res) => {
  try {
    const { id_asignacion } = req.params;
    const { estado } = req.body;

    const [oldAsignacion] = await pool.query("SELECT * FROM asignaciones WHERE id_asignacion=?", [id_asignacion]);

    if (oldAsignacion.length === 0) {
      return res.status(404).json({
        status: 404,
        message: 'No se encontró la asignación para desactivar'
      });
    }

    const [result] = await pool.query(
      `UPDATE asignaciones SET estado = ${estado ? `'${estado}'` : `'${oldAsignacion[0].estado}'`} WHERE id_asignacion=?`,
      [id_asignacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: 'Se desactivó con éxito',
        result: result
      });
    } else {
      res.status(404).json({
        status: 404,
        message: 'No se encontró el registro para actualizar'
      });
    }
  } catch (error) {
    console.error("Error en la función Desactivar:", error);
    res.status(500).json({
      status: 500,
      message: error.message || 'Error interno del servidor'
    });
  }
};

