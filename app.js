require('dotenv').config();
const express = require('express');
const movies = require('./movies.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para procesar los datos en formato JSON
app.disable('x-powered-by') //deshabilitar el header x-powered-by: Express

//Ruta para obtener todas las peliculas o filtrar por genero
app.get('/movies', (req, res) => {
    const {genre} = req.query
    console.log(genre)
    if(genre){
        const filteredMovies = movies.filter(
            movie => movie.genre.includes(genre)
        )
        return res.json(filteredMovies)
    }
    res.json(movies)
});

// Ruta para obtener una tarea por su ID
app.get('/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = movies.find(movie => movie.id === id)
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
});



// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
