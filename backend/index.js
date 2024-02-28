import express from 'express';
import body_parser from 'body-parser';
import { rutaAsignaciones } from './src/routes/asignar.routes.js';

const servidor = express();

// Cambia el orden de uso de los middlewares
servidor.use(body_parser.json());
servidor.use(body_parser.urlencoded({ extended: false }));


servidor.listen(3000, () => {
    console.log("Está funcionando");
});
