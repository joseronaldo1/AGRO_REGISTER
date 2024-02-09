import express from'express'
import  body_parsere from 'body-parser'
import { rutaDeTipoRecurso } from './src/routes/TipoRecurso.route.js' 
import { rutaDeVariedadCultivo } from './src/routes/VariedadCultivo.route.js'

const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))

servidor.use('/recursos', rutaDeTipoRecurso)
servidor.use('/variedades', rutaDeVariedadCultivo)


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})