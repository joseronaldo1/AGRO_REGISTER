import { pool } from "../database/conexion.js";

//listar
export const listarTodo =async (req, res)=> {
    try {
        const [result] = await pool.query("SELECT * FROM usuarios")

        if (result.length > 0 ) {
            res.status(200).json(result)
        }else{
            res.status(404).json({
                "mensaje": "no hay usuarios"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}


//crud Registrar
export const registrar = async (req, res) => {
    try {
        const { nombre, apellidos,correo, rol, cargo, ficha_tecnica, contraseña} =req.body

        // Validar que nombre_variedad esté presente en el cuerpo de la solicitud
        if (!nombre, !apellidos, !correo, !rol, !cargo, !ficha_tecnica, !contraseña) {
            return res.status(400).json({
                status: 400,
                message: 'completa todos los campos requeridos'
            });
        }

        const [result] = await pool.query("INSERT INTO usuarios (nombre, apellidos, correo, rol, cargo, ficha_tecnica, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?)", [nombre, apellidos, correo, rol, cargo, ficha_tecnica, contraseña]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'usuario creado con exito',
                result: result
            });
        } else {
            res.status(403).json({
                status: 403,
                message: 'no se pudo crear usuarios',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Ha ocurrido un error'
        });
    }
}

//desactivar
export const Desactivar = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;

        const [oldusuarios] = await pool.query("SELECT * FROM usuarios WHERE id_usuario=?", [id]);

        const [result] = await pool.query(
            `UPDATE usuarios SET estado = ${estado ? `'${estado}'` : `'${oldusuarios[0].estado}'`} WHERE id_usuario=?`,
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


//actualizar
export const Actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellidos, correo, rol, cargo, ficha_tecnica, contraseña } = req.body;

        const [oldusuarios] = await pool.query("SELECT * FROM usuarios WHERE id_usuario=?", [id]);

        const [result] = await pool.query(
            `UPDATE usuarios SET nombre = ${nombre ? `'${nombre}'` : `'${oldusuarios[0].nombre}'`}, apellidos = ${apellidos ? `'${apellidos}'` : `'${oldusuarios[0].apellidos}'`}, correo = ${correo ? `'${correo}'` : `'${oldusuarios[0].correo}'`}, rol = ${rol ? `'${rol}'` : `'${oldusuarios[0].rol}'`}, cargo = ${cargo ? `'${cargo}'` : `'${oldusuarios[0].cargo}'`}, ficha_tecnica = ${ficha_tecnica ? `'${ficha_tecnica}'` : `'${oldusuarios[0].ficha_tecnica}'`}, contraseña = ${contraseña ? `'${contraseña}'` : `'${oldusuarios[0].contraseña}'`} WHERE id_usuario=?`,
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


// CRUD - Buscarsolouno
export const Buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM usuarios WHERE id_usuario=?", [id]);
                    
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
