import { Router } from "express";
import Task from '../models/Task'

const router = Router();

router.get('/', (req, res) => {
    res.send('<h1>Página de visualización de Tareas</h1>');
})

router.post('/', async(req, res) => {
    const newTask = new Task({title: req.body.title, description: req.body.description, done: req.body.done});
    console.log(newTask);
    await newTask.save();
    res.json('Página de creación de Tareas');    
})

export default router;