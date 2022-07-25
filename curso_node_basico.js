/*curso basado en el tutorial explicado en:
    https://www.youtube.com/watch?v=BhvLIzVL8_o&t=503s
*/
const os = require('os');
const fs = require('fs');
const express = require('express');
const colors = require('colors');


fs.writeFile('./texto.txt', 'tercera linea', (err) => {
    if(err){
        console.log(err);
    }
    console.log('archvo creado');
});


fs.readFile('./texto.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

/*
const handleServer = (req, res)=>{
    res.writeHead('200', {'Content-type': 'text/html'});
    res.write("<h1 style='font-size:20; color:blue'> MENSAJE DEL SERVIDOR </h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, ()=>{
    console.log('Servidor en puerto 3000'.cyan);
});
*/

const server = express();

server.get('/', (req, res) =>{
    res.send("<h1 style='font-size:20; color:yellow; background-color:black'; text-align:center> MENSAJE DEL SERVIDOR CON EXPRESS</h1>");
    res.end();
});

server.listen(3000, ()=>{
    console.log('Server on port 3000'.green);
})
