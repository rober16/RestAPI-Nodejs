const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar los datos en formato JSON
app.use(express.json());

// Datos iniciales (simulados)
let tasks = [
    { id: 1, description: 'Hacer la compra' },
    { id: 2, description: 'Estudiar Node.js' }
];

// Ruta para obtener todas las tareas
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Ruta para obtener una tarea por su ID
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    res.json(task);
});

// Ruta para crear una nueva tarea
app.post('/tasks', (req, res) => {
    const { description } = req.body;
    const id = tasks.length + 1;
    const newTask = { id, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Ruta para actualizar una tarea existente
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }
    task.description = description;
    res.json(task);
});

// Ruta para eliminar una tarea
app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.status(204).end();
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
