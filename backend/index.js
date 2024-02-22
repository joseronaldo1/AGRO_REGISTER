import express from'express'
import  body_parsere from 'body-parser'
import { RegistrarProgramacion } from './src/controllers/programarcion.controller.js'
import { Desactivar } from './src/controllers/asignar.controller.js'

const servidor = express()

servidor.use('/',Desactivar)
servidor.use('/',RegistrarProgramacion)
servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})