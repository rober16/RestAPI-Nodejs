require('dotenv').config();
const express = require('express');
const movies = require('./movies.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para procesar los datos en formato JSON
app.disable('x-powered-by') //deshabilitar el header x-powered-by: Express


// Ruta para obtener todas las tareas
app.get('/movies', (req, res) => {
    res.json(movies);
});

// Ruta para obtener una tarea por su ID
app.get('/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const movie = movies.find(movie => movie.id === id);
    if (!movie) return res.status(404).json({ message: 'Pelicula no encontrada' });

    res.json(movie);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
