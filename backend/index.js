import express from'express'
import  body_parsere from 'body-parser'
import programacion from './src/routes/programacion.routes.js'

const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))

servidor.use(programacion)

servidor.listen(3000, () =>{
    console.log("esta funcionando")
})