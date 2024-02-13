import { json } from "express";
import { pool } from "../database/conexion.js";

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
    const { fecha_asignacion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO asignaciones (fecha_asignacion) VALUES (?)",
      [fecha_asignacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se registró la asignación con éxito",
        result: result,
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
      message: error,
    });
  }
};

// CRUD - Editar
export const editarAsignacion = async (req, res) => {
  try {
    const { id_asignacion, fecha_asignacion } = req.body;
    const [result] = await pool.query(
      "UPDATE asignaciones SET fecha_asignacion = ? WHERE id_asignacion = ?",
      [fecha_asignacion, id_asignacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se editó con éxito",
        result: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontró el registro para editar",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// CRUD - Eliminar
export const eliminarAsignacion = async (req, res) => {
  try {
    const { id_asignacion } = req.body;
    const [result] = await pool.query(
      "DELETE FROM asignaciones WHERE id_asignacion = ?",
      [id_asignacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se eliminó con éxito",
        result: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontró el registro para eliminar",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// CRUD - Buscar
export const buscarAsignacion = async (req, res) => {
  try {
    const { fecha_asignacion } = req.params;
    const [result] = await pool.query(
      "SELECT * FROM asignaciones WHERE fecha_asignacion LIKE ?",
      [`%${fecha_asignacion}%`]
    );

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontraron resultados de la fecha",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

//cur - Actualizar
export const Actualizar = async (req, res) => {
  try {
    const { id_asignacion } = req.params;
    const { fecha_asignacion, estado } = req.body;

    console.log(`Id de la asignación: ${id_asignacion}`);

    const [oldAsignacion] = await pool.query("SELECT * FROM Asignacion WHERE id_asignacion=?", [id_asignacion]);
    console.log("Resultado:", oldAsignacion);

    const [respuesta] = await pool.query(
      `UPDATE Asignacion SET fecha_asignacion = ${fecha_asignacion ? `'${fecha_asignacion}'` : `'${oldAsignacion[0].fecha_asignacion}'`}, estado = ${estado ? `'${estado}'` : `'${oldAsignacion[0].estado}'`}
      WHERE id_asignacion = ?`,
      [id_asignacion]
    );

    if (respuesta.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Actualización exitosa",
        respuesta: respuesta
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontraron resultados para la actualización"
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message
    });
  }
};
