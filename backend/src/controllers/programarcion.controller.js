// controlador
import { pool } from "../database/conexion.js";

// CRUD - listar
export const listarProgramacion = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM programacion");

    if (result.length > 0) {
      res.status(200).json(result);
    } else {
      res.status(400).json({
        Mensaje: "No hay programación",
      });
    }
  } catch (error) {
    res.status(500).json({
      Mensaje: error,
    });
  }
};

// CRUD - Registrar
export const RegistrarProgramacion = async (req, res) => {
  try {
    const { fecha_inicio, fecha_fin, observacion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO programacion (fecha_inicio, fecha_fin, observacion) VALUES (?, ?, ?)",
      [fecha_inicio, fecha_fin, observacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se registró la programación con éxito",
        result: result,
      });
    } else {
      res.status(403).json({
        status: 403,
        message: "No se registró la programación",
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
export const EditarProgramacion = async (req, res) => {
  try {
    const { id_programacion, fecha_fin, fecha_inicio } = req.body;
    const [result] = await pool.query(
      "UPDATE programacion SET fecha_inicio = ?, fecha_fin = ? WHERE id_programacion = ?",
      [fecha_inicio, fecha_fin, id_programacion]
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

// CRUD - Actualizar
export const ActualizarProgramacion = async (req, res) => {
  try {
    const { fecha_inicio, fecha_fin, observacion } = req.body;
    const [result] = await pool.query(
      "UPDATE programacion SET fecha_inicio = ?, fecha_fin = ? WHERE observacion = ?",
      [fecha_inicio, fecha_fin, observacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se actualizó con éxito",
        result: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontró el registro para actualizar",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error,
    });
  }
};

// CRUD - Desactivar
export const DesactivarProgramacion = async (req, res) => {
  try {
    const { id_programacion } = req.body;
    const [result] = await pool.query(
      "DELETE FROM programacion WHERE id_programacion = ?",
      [id_programacion]
    );

    if (result.affectedRows > 0) {
      res.status(200).json({
        status: 200,
        message: "Se desactivó con éxito",
        result: result,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "No se encontró el registro para desactivar",
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
export const BuscarProgramacion = async (req, res) => {
  try {
    const { fecha_inicio } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM programacion WHERE fecha_inicio LIKE ?",
      [`%${fecha_inicio}%`]
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
