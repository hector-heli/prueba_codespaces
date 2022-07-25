import { Router } from "express";

const router = Router();

router.get('/tasks', (req, res) => {
    res.send('Tareas');
})

export default router;