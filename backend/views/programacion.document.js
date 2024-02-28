<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/public/estilos.css">
    <title>Documentación de la api auto registrer</title>
</head>
<body>
    
    <h1>Documentacion de auto registrer</h1>
    <hr>
    <hr>
    <h3>Requerimiento 1. Documentacion listar programacion</h3>
    <table>
        <tr><td>NUMERO</td><td>1</td></tr>
        <tr><td>NOMBRE DEL SERVICIO</td><td>listarProgramacion</td></tr>
        <tr><td>URI</td><td>/listarProgramacion</td></tr>
        <tr><td>DESCRIPCION</td><td>permite listar a los programadores registrados en la base de datos</td></tr>
        <tr><td>VERBO HTTP</td><td>GET</td></tr>
        <tr><td>HEADER</td><td>null</td></tr>
        <tr><td>USUARIO</td><td>administrador</td></tr>
        <tr><td>REUEST json/ PETICION BODY</td><td></td></tr>
        <tr><td>RESPUESTA json</td><td>
            correcto:
            status:200
            json:
            {
            
                "id_programacion":1,
                "fecha_inicio": "2023-11-12T06:00:00.000Z",
                "fecha_fin": "2023-11-20T06:00:00.000Z",
                "observacion":"mal hecho el trabajo",
                "fk_id_lote": 1,
                "fk_tipo_actividades": 3,
                "estado":1
            
            },

              incorrecto:
              status:404
              body:{
                status : 404
                "mensaje": "no se pudo mostar hay algun error"
              }

              error:
              status:500
              body:{
                "mensaje" : error
              }

        </td></tr>
        <tr>REALIZACION DE ACTIVIDAD<td></td><td>KEVIN FERNANDO ANDRADE MAHECHA </td></tr>
        <tr>RAMA HITHUB<td></td><td> devkfm </td></tr>
    </table>

    <hr>
    <h3>Requerimiento 2. registrar programacion</h3>
    <table>
      <tr><td>NUMERO</td><td>2</td></tr>
      <tr><td>NOMBRE DEL SERVICIO</td><td>RegistrarProgramacion</td></tr>
      <tr><td>URI</td><td>/RegistrarProgramacion</td></tr>
      <tr><td>DESCRIPCION</td><td>permite crear programaciones subiendolas a la base de datos</td></tr>
      <tr><td>VERBO HTTP</td><td>post</td></tr>
      <tr><td>HEADER</td><td>null</td></tr>
      <tr><td>USUARIO</td><td>administrador</td></tr>
      <tr><td>REUEST json/ PETICION BODY</td><td>{ "fecha_inicio": "2023-11-12T06:00:00.000Z", "fecha_fin": "2023-11-20T06:00:00.000Z", "observacion":"mal hecho el trabajo", "fk_id_lote": 1, "fk_tipo_actividades": 3, "estado":1 }</td></tr>
      <tr><td>RESPUESTA json</td><td>

          correcto:
          status:200
          json:
          {
            "mensaje": "programacion registrada con exito"
          },

            incorrecto:
            status:404
            body:{
              status:404
              "mensaje": "hay un error no se pudo guardar"
            }

            error:
            status:500
            body:{
              "mensaje":error
            }

      </td></tr>
      <tr>REALIZACION DE ACTIVIDAD<td></td><td>KEVIN FERNANDO ANDRADE MAHECHA </td></tr>
      <tr>RAMA HITHUB<td></td><td> devkfm </td></tr>
  </table>

  <hr>
  <h3>Requerimiento 3. Actualizar Programacion</h3>
  <table>
    <tr><td>NUMERO</td><td>3</td></tr>
    <tr><td>NOMBRE DEL SERVICIO</td><td>ActualizarProgramacion</td></tr>
    <tr><td>URI</td><td>/ActualizarProgramacion/1</td></tr>
    <tr><td>DESCRIPCION</td><td>permite modificar informacion en las programaciones registradas en la base de datos</td></tr>
    <tr><td>VERBO HTTP</td><td>PUT</td></tr>
    <tr><td>HEADER</td><td>null</td></tr>
    <tr><td>USUARIO</td><td>administrador</td></tr>
    <tr><td>REUEST json/ PETICION BODY</td><td>{"estado":2 }</td></tr>
    <tr><td>RESPUESTA json</td><td>
        correcto:
        status:200
        json:
        {
          "mensaje": "ha sido actualizado"
        },

          incorrecto:
          status:404
          body:{
            status:404
            "mensaje": "No se pudo actualizar"
          }

          error:
          status:500
          body:{
            "mensaje":error
          }

    </td></tr>
    <tr>REALIZACION DE ACTIVIDAD<td></td><td>KEVIN FERNANDO ANDRADE MAHECHA </td></tr>
    <tr>RAMA HITHUB<td></td><td> devkfm </td></tr>
</table>

<hr>
<h3>Requerimiento 4. Buscar Programacion</h3>
<table>
  <tr><td>NUMERO</td><td>4</td></tr>
  <tr><td>NOMBRE DEL SERVICIO</td><td>BuscarProgramacion</td></tr>
  <tr><td>URI</td><td>/BuscarProgramacion/1</td></tr>
  <tr><td>DESCRIPCION</td><td>permite mostar datos especificos registrados en la base de datos</td></tr>
  <tr><td>VERBO HTTP</td><td>GET</td></tr>
  <tr><td>HEADER</td><td>null</td></tr>
  <tr><td>USUARIO</td><td>administrador</td></tr>
  <tr><td>REUEST json/ PETICION BODY</td><td></td></tr>
  <tr><td>RESPUESTA json</td><td>
      correcto:
      status:200
      json:
      {
        "id_programacion":1,
        "fecha_inicio": "2023-11-12T06:00:00.000Z",
        "fecha_fin": "2023-11-20T06:00:00.000Z",
        "observacion":"mal hecho el trabajo",
        "fk_id_lote": 1,
        "fk_tipo_actividades": 3,
        "estado": 2
      }

        incorrecto:
        status:404
        body:{
          status:404
          "mensaje": "No se encontró nada con ese ID"
        }

        error:
        status:500
        body:{
          "mensaje":error
        }

  </td></tr>
  <tr>REALIZACION DE ACTIVIDAD<td></td><td>KEVIN FERNANDO ANDRADE MAHECHA </td></tr>
  <tr>RAMA HITHUB<td></td><td> devkfm </td></tr>
</table>

<hr>
<h3>Requerimiento 5. desactivar programacion</h3>
<table>
  <tr><td>NUMERO</td><td>5</td></tr>
  <tr><td>NOMBRE DEL SERVICIO</td><td>desactivarActividad</td></tr>
  <tr><td>URI</td><td>/desactivarActividad/1</td></tr>
  <tr><td>DESCRIPCION</td><td>permite desactivar la informacion registrada en la base de datos</td></tr>
  <tr><td>VERBO HTTP</td><td>DELETE</td></tr>
  <tr><td>HEADER</td><td>null</td></tr>
  <tr><td>USUARIO</td><td>administrador</td></tr>
  <tr><td>REUEST json/ PETICION BODY</td><td></td></tr>
  <tr><td>RESPUESTA json</td><td>
      correcto:
      status:200
      json:
      {
        "mensaje": "desactivado con exito"
      },

        incorrecto:
        status:404
        body:{
          status:404
          "mensaje": "No se pudo desactivar"
        }

        error:
        status:500
        body:{
          "mensaje":error
        }

  </td></tr>
  <tr>REALIZACION DE ACTIVIDAD<td></td><td>KEVIN FERNANDO ANDRADE MAHECHA </td></tr>
  <tr>RAMA HITHUB<td></td><td> devkfm </td></tr>
</table>
    
</body>
</html>