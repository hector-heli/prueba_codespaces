const { request } = require("express");

/*  Aplicacion basada en el tutorial explicado en:
    https://www.youtube.com/watch?v=BhvLIzVL8_o&t=503s
*/
const express = require('express');
const morgan = require("morgan");
const server = express();

// SETTINGS
server.set('appName', 'Node-Express tutorial');
server.set('port', 5000);
server.set('view engine', 'ejs');

// MIDDLEWARES

/* function logger(req, res, next){
    console.log(`Request received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
 */
//server.use(express.json);
//server.use(logger);
server.use(morgan('dev'));

/* server.all('/user', (req,res, next) =>{
    console.log('Por aquí pasó');
    next();
})
 */

 //ROUTES
server.get('/', (req, res)=>{
    const data =[{name: 'Hector Helí'}, {name: 'Natty'}, {name: 'Valeria'}, 
    {name: 'Camilo'}, {name: 'Johan Esteban'}];
    res.render('index.ejs', {people: data});
    //res.send("<h1 style='font-size:60; color:yellow; background-color:black'; text-align:center> MENSAJE DEL SERVIDOR CON EXPRESS</h1>")
});

server.get('/contact', (req, res)=>{
    res.send("Para que te puedas contactar con nosotros");
});

server.post('/user', (req, res)=>{
    res.send("Pagina par inicio de sesión");
});

server.put('/login', (req, res)=>{
    res.send("Pagina par inicio de sesión");
});

server.delete('/login', (req, res)=>{
    res.send("Pagina par inicio de sesión");
});

//STATICS
server.use(express.static('public'));




server.listen(server.get('port'), () => {
    console.log(server.get('appName'));
    console.log('Server on port: ', server.get('port'));
})

