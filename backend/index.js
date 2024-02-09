import express from'express'
import  body_parsere from 'body-parser'

const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})