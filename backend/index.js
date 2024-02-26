import express from'express'
import  body_parsere from 'body-parser';
import rutaActividad from './src/routes/actividad.routes.js';
import { rutaAsignaciones } from './src/routes/asignar.routes.js';
import rutasdelotes from './src/routes/lotes.routes.js';
import rutaDeProduccion from './src/routes/Produccion.route.js';
import { rutaProgramacion } from './src/routes/programacion.routes.js';
import rutaDeRecursosUtilizados from './src/routes/RecursosUtilizados.routes.js';
import rutaTipo_cultivo from './src/routes/tipo_cultivo.routes.js';
import rutaDeTipoActividad from './src/routes/TipoActividad.routes.js';
import { rutaDeTipoRecurso } from './src/routes/TipoRecurso.route.js';
import { rutaDeVariedadCultivo } from './src/routes/VariedadCultivo.route.js';
import rutasdeusuarios from './src/routes/usuarios.rute.js';


const servidor = express()

servidor.use(body_parsere.json())
servidor.use(body_parsere.urlencoded({extended: false}))

servidor.set('view engine', 'ejs');
servidor.set('views','./views');

//
servidor.use(rutaActividad);
servidor.use(rutaAsignaciones);
servidor.use(rutasdelotes);
servidor.use(rutaDeProduccion);
servidor.use( rutaProgramacion);
servidor.use(rutaDeRecursosUtilizados);
servidor.use(rutaTipo_cultivo);
servidor.use(rutaDeTipoActividad);
servidor.use(rutaDeTipoRecurso);
servidor.use(rutasdeusuarios);
servidor.use(rutaDeVariedadCultivo);




servidor.use(express.static('./public'));

servidor.get('/document',(req,res)=>{
    res.render('document.ejs');
})





servidor.listen(3000, () =>{
    console.log("esta funcionando")
})