
// const express = require('express');
import express from 'express';
import colors from 'colors';
import tasksRoutes from './routes/tasksRoutes'

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.json({message: 'bienvenido a esta aplicación'});
})

app.use(tasksRoutes);

export default app;