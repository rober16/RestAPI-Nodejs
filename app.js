import express, { json } from 'express';
import { corsMiddleware } from './middlewares/cors.js';
import { moviesRouter } from './routes/movies.js';
const app = express();

app.use(json()); // Middleware para procesar los datos en formato JSON
app.use(corsMiddleware())
app.disable('x-powered-by') //deshabilitar el header x-powered-by: Express

//Al acceder a /movies voy a cargar todas las rutas de moviesRouter
app.get('/movies', moviesRouter);

 // Iniciar el servidor
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
})