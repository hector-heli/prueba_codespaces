/*
    Tutorial de Creación de una API REST basado en:
    https://www.youtube.com/watch?v=HEx2lVokPu0&t=1446s
 */

import app from './app';
import './database'; 


app.listen(app.get('port'), () => {
    const message = 'Server on port: ' + app.get('port');
    console.log(message.yellow);
});
