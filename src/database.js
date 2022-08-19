/* 
    Para las bases de datos de este proyecto se usa el servicio de 
    MONGODB Atlas. Como guía de uso se usa el siguiente tutorial.

    https://www.youtube.com/watch?v=97FfXEy1zas&ab_channel=Fazt
*/

import mongoose from 'mongoose';
import settings from './settings';

(async ()=> {
    try{
        const db = await mongoose.connect(settings.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database is connected to: ', db.connection.name);
    } catch(e){
        console.error(e);
    }
    
})();
