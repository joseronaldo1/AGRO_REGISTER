import express from'express'
import  body_parsere from 'body-parser'
import rutasdeusuarios from './src/routes/usuarios.rute.js';

const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))

servidor.set('view engine', 'ejs');
servidor.set('views','./views');

servidor.get('/document',(req,res)=>{
    res.render('document.ejs');
})


servidor.use(rutasdeusuarios);


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})