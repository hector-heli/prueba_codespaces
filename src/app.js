
// const express = require('express');
import express from 'express';
import { Color } from 'colors';
import tasksRoutes from './routes/tasksRoutes'

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: 'bienvenido a esta aplicación'});
})

app.use('/api/tasks', tasksRoutes);

export default app;